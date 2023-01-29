import { useEffect, useState } from 'react'

const ipcRenderer = window.electron.ipcRenderer
const fujitsu = window.fujitsu
const scanProxyUrl = 'http://localhost:8087'

function loadScript(url: string) {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  document.body.appendChild(script)
}

function Scan(): JSX.Element {
  const [file, setFile] = useState<string>('')
  useEffect(() => {
    loadScript(scanProxyUrl + '/signalr/hubs')
    setTimeout(() => {
      // 先加载文件，后连接
      // window.jQuery.connection.hub.url = 'http://100.100.21.58:1234/signalr';
      try {
        window.jQuery.connection.hub.url = scanProxyUrl + '/signalr'
        // const urlIndex = 1;
        fujitsu.fiscanner.Initialize(window.jQuery.connection.fiHub)
        fujitsu.fiscanner.RegisterEvent('OnScannerReady', OnScannerReady)
        fujitsu.fiscanner.RegisterEvent(
          'OnScanToFile',
          function (readCount: number, filename: string) {
            // 每次点击开始扫描。readCount都从1开始递增计算 ,比如放两次2张就是 1，2 =》1，2
            console.log('==这个 OnScanToFile', { readCount })

            // fileStore.addPendingData({
            //   name: filename,
            //   status: 0,
            //   create_at: new Date().getTime(),
            //   creator: $storage.username,
            //   upload_way: EUploadWay.scan
            // });

            console.log('=======', filename)
          }
        )
        window.jQuery.connection.hub.start().done(function () {
          console.log('点击注册成功')
          // fileStore.changeDisableScanButton(false);
        })

        window.jQuery.connection.hub.error(function (error: string) {
          console.log('88 error: ' + error)
        })
      } catch (error) {
        console.log('fail---', { error })
      }

      function OnScannerReady() {
        console.log('运行 OnScannerReady')

        fujitsu.fiscanner.CloseScanner().done(function (resultCode: string | number) {
          if (resultCode !== 0) {
            let errorMessage = 'CloseScanner ret = ' + resultCode
            if (resultCode === -1) {
              errorMessage = errorMessage + ', errorcode = ' + fujitsu.fiscanner.errorCode
            }
            if (resultCode === -3) {
              console.info('扫描仪出错啦～')
            }
            console.info(11, { errorMessage })
            // fileStore.changeDisableScanButton(true);
          } else {
            fujitsu.fiscanner.GetSourceCount().done(function (resultCode: number) {
              if (resultCode > 0) {
                fujitsu.fiscanner.GetSourceSelect().done(function (resultIndex: string) {
                  // (document.getElementById('rst_GetSourceSelect') as HTMLInputElement).value = resultIndex;
                  console.log(resultIndex)
                })
              } else {
                // (document.getElementById('rst_GetSourceSelect') as HTMLInputElement).value = String(-1);
                console.log('GetSourceCount failure')
              }
            })
          }
        })
      }
    }, 1000)
  }, [])

  const onClick = () => {
    console.log('openDialog')
    ipcRenderer.send('openDialog')
    ipcRenderer.on('selectedItem', (event, files) => {
      console.log(event, files) //输出选择的文件
    })
  }

  const onChoosePic = () => {
    console.log('onChoosePic')
    ipcRenderer.send('onChoosePic', file)
  }

  const onStartScan = () => {
    console.log('onStartScan')
    window.jQuery.connection.hub.start().done(function () {
      fujitsu.fiscanner.rotation = '4' // Automatic
      fujitsu.fiscanner.fileType = '3' // jpeg
      fujitsu.fiscanner.StartScan().done(function (resultCode: string | number) {
        if (resultCode !== 0) {
          let errorMessage = '11StartScan ret = ' + resultCode
          if (resultCode === -1 && fujitsu.fiscanner.errorCode === 39) {
            console.info('请检查扫描文件是否已放置好～')
          }
          if (resultCode === -1 && fujitsu.fiscanner.errorCode === 26) {
            console.info('请检查扫描机是否正常运行～')
          }
          if (resultCode === -1) {
            errorMessage = errorMessage + ', 巴拉巴拉errorcode = ' + fujitsu.fiscanner.errorCode
          }
          console.info(321, { errorMessage })
          // showMessage(errorMessage);
        }

        // run(params[0], params[1]);
        fujitsu.fiscanner.CloseScanner().done(function (resultCode: string | number) {
          if (resultCode !== 0) {
            let errorMessage = '22CloseScanner ret = ' + resultCode
            if (resultCode === -1) {
              errorMessage = errorMessage + ', errorcode = ' + fujitsu.fiscanner.errorCode
            }
            console.info(errorMessage)
          } else {
            console.log('扫描结束')
          }
        })
      })
    })
    window.jQuery.connection.hub.error(function (error: string) {
      console.log('onRunScan77 error: ' + error)
    })
  }

  return (
    <div>
      <input
        onChange={(e) => {
          setFile(e.target.value)
        }}
        value={file}
      ></input>
      <button onClick={onClick}>click</button>
      <button onClick={onChoosePic}>choosePic</button>
      <button onClick={onStartScan}>onStartScan</button>
    </div>
  )
}

export default Scan
