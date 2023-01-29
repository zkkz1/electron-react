 
(function() {
	window['fujitsu'] = {
		fiscanner: {}
	}
	
	Object.defineProperty(fujitsu.fiscanner, "adjustRGB", {
		get: function () {
			return fiHub.state.adjustRGB
		},
		set: function (v) {
			fiHub.state.adjustRGB = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "adjustRGBB", {
		get: function () {
			return fiHub.state.adjustRGBB
		},
		set: function (v) {
			fiHub.state.adjustRGBB = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "adjustRGBG", {
		get: function () {
			return fiHub.state.adjustRGBG
		},
		set: function (v) {
			fiHub.state.adjustRGBG = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "adjustRGBR", {
		get: function () {
			return fiHub.state.adjustRGBR
		},
		set: function (v) {
			fiHub.state.adjustRGBR = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "aDTCThreshold", {
		get: function () {
			return fiHub.state.aDTCThreshold
		},
		set: function (v) {
			fiHub.state.aDTCThreshold = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "aIQCNotice", {
		get: function () {
			return fiHub.state.aIQCNotice
		},
		set: function (v) {
			fiHub.state.aIQCNotice = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "autoBorderDetection", {
		get: function () {
			return fiHub.state.autoBorderDetection
		},
		set: function (v) {
			fiHub.state.autoBorderDetection = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "autoBright", {
		get: function () {
			return fiHub.state.autoBright
		},
		set: function (v) {
			fiHub.state.autoBright = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "automaticColorBackground", {
		get: function () {
			return fiHub.state.automaticColorBackground
		},
		set: function (v) {
			fiHub.state.automaticColorBackground = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "automaticColorSensitivity", {
		get: function () {
			return fiHub.state.automaticColorSensitivity
		},
		set: function (v) {
			fiHub.state.automaticColorSensitivity = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "automaticSenseMedium", {
		get: function () {
			return fiHub.state.automaticSenseMedium
		},
		set: function (v) {
			fiHub.state.automaticSenseMedium = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "autoProfile", {
		get: function () {
			return fiHub.state.autoProfile
		},
		set: function (v) {
			fiHub.state.autoProfile = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "autoProfileSensitivity", {
		get: function () {
			return fiHub.state.autoProfileSensitivity
		},
		set: function (v) {
			fiHub.state.autoProfileSensitivity = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "background", {
		get: function () {
			return fiHub.state.background
		},
		set: function (v) {
			fiHub.state.background = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "backgroundColor", {
		get: function () {
			return fiHub.state.backgroundColor
		},
		set: function (v) {
			fiHub.state.backgroundColor = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "backgroundSmoothing", {
		get: function () {
			return fiHub.state.backgroundSmoothing
		},
		set: function (v) {
			fiHub.state.backgroundSmoothing = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "backgroundSmoothness", {
		get: function () {
			return fiHub.state.backgroundSmoothness
		},
		set: function (v) {
			fiHub.state.backgroundSmoothness = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "backgroundThreshold", {
		get: function () {
			return fiHub.state.backgroundThreshold
		},
		set: function (v) {
			fiHub.state.backgroundThreshold = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "barcodeDetection", {
		get: function () {
			return fiHub.state.barcodeDetection
		},
		set: function (v) {
			fiHub.state.barcodeDetection = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "barcodeDirection", {
		get: function () {
			return fiHub.state.barcodeDirection
		},
		set: function (v) {
			fiHub.state.barcodeDirection = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "barcodeMaxSearchPriorities", {
		get: function () {
			return fiHub.state.barcodeMaxSearchPriorities
		},
		set: function (v) {
			fiHub.state.barcodeMaxSearchPriorities = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "barcodeNotDetectionNotice", {
		get: function () {
			return fiHub.state.barcodeNotDetectionNotice
		},
		set: function (v) {
			fiHub.state.barcodeNotDetectionNotice = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "barcodeRegionLeft", {
		get: function () {
			return fiHub.state.barcodeRegionLeft
		},
		set: function (v) {
			fiHub.state.barcodeRegionLeft = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "barcodeRegionLength", {
		get: function () {
			return fiHub.state.barcodeRegionLength
		},
		set: function (v) {
			fiHub.state.barcodeRegionLength = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "barcodeRegionTop", {
		get: function () {
			return fiHub.state.barcodeRegionTop
		},
		set: function (v) {
			fiHub.state.barcodeRegionTop = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "barcodeRegionWidth", {
		get: function () {
			return fiHub.state.barcodeRegionWidth
		},
		set: function (v) {
			fiHub.state.barcodeRegionWidth = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "barcodeType", {
		get: function () {
			return fiHub.state.barcodeType
		},
		set: function (v) {
			fiHub.state.barcodeType = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "binding", {
		get: function () {
			return fiHub.state.binding
		},
		set: function (v) {
			fiHub.state.binding = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "blankPageIgnoreAreaSize", {
		get: function () {
			return fiHub.state.blankPageIgnoreAreaSize
		},
		set: function (v) {
			fiHub.state.blankPageIgnoreAreaSize = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "blankPageNotice", {
		get: function () {
			return fiHub.state.blankPageNotice
		},
		set: function (v) {
			fiHub.state.blankPageNotice = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "blankPageSkip", {
		get: function () {
			return fiHub.state.blankPageSkip
		},
		set: function (v) {
			fiHub.state.blankPageSkip = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "blankPageSkipMode", {
		get: function () {
			return fiHub.state.blankPageSkipMode
		},
		set: function (v) {
			fiHub.state.blankPageSkipMode = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "blankPageSkipTabPage", {
		get: function () {
			return fiHub.state.blankPageSkipTabPage
		},
		set: function (v) {
			fiHub.state.blankPageSkipTabPage = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "brightness", {
		get: function() {
			return fiHub.state.brightness
		},
		set: function(v) {
			fiHub.state.brightness = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "characterExtraction", {
		get: function () {
			return fiHub.state.characterExtraction
		},
		set: function (v) {
			fiHub.state.characterExtraction = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "characterExtractionMethod", {
		get: function () {
			return fiHub.state.characterExtractionMethod
		},
		set: function (v) {
			fiHub.state.characterExtractionMethod = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "characterThickness", {
		get: function () {
			return fiHub.state.characterThickness
		},
		set: function (v) {
			fiHub.state.characterThickness = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "closeSourceUI", {
		get: function () {
			return fiHub.state.closeSourceUI
		},
		set: function (v) {
			fiHub.state.closeSourceUI = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "colorReproduction", {
		get: function () {
			return fiHub.state.colorReproduction
		},
		set: function (v) {
			fiHub.state.colorReproduction = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "colorReproductionBrightness", {
		get: function () {
			return fiHub.state.colorReproductionBrightness
		},
		set: function (v) {
			fiHub.state.colorReproductionBrightness = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "colorReproductionContrast", {
		get: function () {
			return fiHub.state.colorReproductionContrast
		},
		set: function (v) {
			fiHub.state.colorReproductionContrast = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "colorReproductionCustomGamma", {
		get: function () {
			return fiHub.state.colorReproductionCustomGamma
		},
		set: function (v) {
			fiHub.state.colorReproductionCustomGamma = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "colorReproductionHighlight", {
		get: function () {
			return fiHub.state.colorReproductionHighlight
		},
		set: function (v) {
			fiHub.state.colorReproductionHighlight = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "colorReproductionShadow", {
		get: function () {
			return fiHub.state.colorReproductionShadow
		},
		set: function (v) {
			fiHub.state.colorReproductionShadow = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "compressionType", {
		get: function () {
			return fiHub.state.compressionType
		},
		set: function (v) {
			fiHub.state.compressionType = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "contrast", {
		get: function () {
			return fiHub.state.contrast
		},
		set: function (v) {
			fiHub.state.contrast = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "cropMarginSize", {
		get: function () {
			return fiHub.state.cropMarginSize
		},
		set: function (v) {
			fiHub.state.cropMarginSize = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "cropPriority", {
		get: function () {
			return fiHub.state.cropPriority
		},
		set: function (v) {
			fiHub.state.cropPriority = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "customGamma", {
		get: function () {
			return fiHub.state.customGamma
		},
		set: function (v) {
			fiHub.state.customGamma = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "customPaperLength", {
		get: function () {
			return fiHub.state.customPaperLength
		},
		set: function (v) {
			fiHub.state.customPaperLength = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "customPaperWidth", {
		get: function () {
			return fiHub.state.customPaperWidth
		},
		set: function (v) {
			fiHub.state.customPaperWidth = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "customResolution", {
		get: function () {
			return fiHub.state.customResolution
		},
		set: function (v) {
			fiHub.state.customResolution = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "deskew", {
		get: function () {
			return fiHub.state.deskew
		},
		set: function (v) {
			fiHub.state.deskew = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "deskewBackground", {
		get: function () {
			return fiHub.state.deskewBackground
		},
		set: function (v) {
			fiHub.state.deskewBackground = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "deskewMode", {
		get: function () {
			return fiHub.state.deskewMode
		},
		set: function (v) {
			fiHub.state.deskewMode = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "digitalEndorser", {
		get: function () {
			return fiHub.state.digitalEndorser
		},
		set: function (v) {
			fiHub.state.digitalEndorser = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "digitalEndorserCountDirection", {
		get: function () {
			return fiHub.state.digitalEndorserCountDirection
		},
		set: function (v) {
			fiHub.state.digitalEndorserCountDirection = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "digitalEndorserCounter", {
		get: function () {
			return fiHub.state.digitalEndorserCounter
		},
		set: function (v) {
			fiHub.state.digitalEndorserCounter = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "digitalEndorserCountStep", {
		get: function () {
			return fiHub.state.digitalEndorserCountStep
		},
		set: function (v) {
			fiHub.state.digitalEndorserCountStep = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "digitalEndorserDirection", {
		get: function () {
			return fiHub.state.digitalEndorserDirection
		},
		set: function (v) {
			fiHub.state.digitalEndorserDirection = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "digitalEndorserString", {
		get: function () {
			return fiHub.state.digitalEndorserString
		},
		set: function (v) {
			fiHub.state.digitalEndorserString = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "digitalEndorserXOffset", {
		get: function () {
			return fiHub.state.digitalEndorserXOffset
		},
		set: function (v) {
			fiHub.state.digitalEndorserXOffset = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "digitalEndorserYOffset", {
		get: function () {
			return fiHub.state.digitalEndorserYOffset
		},
		set: function (v) {
			fiHub.state.digitalEndorserYOffset = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "divideLongPage", {
		get: function () {
			return fiHub.state.divideLongPage
		},
		set: function (v) {
			fiHub.state.divideLongPage = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "dTCSensitivity", {
		get: function () {
			return fiHub.state.dTCSensitivity
		},
		set: function (v) {
			fiHub.state.dTCSensitivity = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "edgeFiller", {
		get: function () {
			return fiHub.state.edgeFiller
		},
		set: function (v) {
			fiHub.state.edgeFiller = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "edgeFillerBottom", {
		get: function () {
			return fiHub.state.edgeFillerBottom
		},
		set: function (v) {
			fiHub.state.edgeFillerBottom = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "edgeFillerLeft", {
		get: function () {
			return fiHub.state.edgeFillerLeft
		},
		set: function (v) {
			fiHub.state.edgeFillerLeft = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "edgeFillerRight", {
		get: function () {
			return fiHub.state.edgeFillerRight
		},
		set: function (v) {
			fiHub.state.edgeFillerRight = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "edgeFillerTop", {
		get: function () {
			return fiHub.state.edgeFillerTop
		},
		set: function (v) {
			fiHub.state.edgeFillerTop = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "edgeRepair", {
		get: function () {
			return fiHub.state.edgeRepair
		},
		set: function (v) {
			fiHub.state.edgeRepair = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "endorser", {
		get: function () {
			return fiHub.state.endorser
		},
		set: function (v) {
			fiHub.state.endorser = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "endorserCountDirection", {
		get: function () {
			return fiHub.state.endorserCountDirection
		},
		set: function (v) {
			fiHub.state.endorserCountDirection = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "endorserCounter", {
		get: function () {
			return fiHub.state.endorserCounter
		},
		set: function (v) {
			fiHub.state.endorserCounter = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "endorserCountStep", {
		get: function () {
			return fiHub.state.endorserCountStep
		},
		set: function (v) {
			fiHub.state.endorserCountStep = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "endorserDialog", {
		get: function () {
			return fiHub.state.endorserDialog
		},
		set: function (v) {
			fiHub.state.endorserDialog = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "endorserDirection", {
		get: function () {
			return fiHub.state.endorserDirection
		},
		set: function (v) {
			fiHub.state.endorserDirection = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "endorserFont", {
		get: function () {
			return fiHub.state.endorserFont
		},
		set: function (v) {
			fiHub.state.endorserFont= v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "endorserOffset", {
		get: function () {
			return fiHub.state.endorserOffset
		},
		set: function (v) {
			fiHub.state.endorserOffset = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "endorserString", {
		get: function () {
			return fiHub.state.endorserString
		},
		set: function (v) {
			fiHub.state.endorserString = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "errorCode", {
		get: function () {
			return fiHub.state.errorCode
		},
	});
	Object.defineProperty(fujitsu.fiscanner, "fadingCompensation", {
		get: function () {
			return fiHub.state.fadingCompensation
		},
		set: function (v) {
			fiHub.state.fadingCompensation = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "fileCounter", {
		get: function () {
			return fiHub.state.fileCounter
		},
		set: function (v) {
			fiHub.state.fileCounter = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "fileName", {
		get: function () {
			return fiHub.state.fileName
		},
		set: function (v) {
			fiHub.state.fileName = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "fileType", {
		get: function () {
			return fiHub.state.fileType
		},
		set: function (v) {
			fiHub.state.fileType = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "filter", {
		get: function () {
			return fiHub.state.filter
		},
		set: function (v) {
			fiHub.state.filter = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "filterSaturationSensitivity", {
		get: function () {
			return fiHub.state.filterSaturationSensitivity
		},
		set: function (v) {
			fiHub.state.filterSaturationSensitivity = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "frontBackDetection", {
		get: function () {
			return fiHub.state.frontBackDetection
		},
		set: function (v) {
			fiHub.state.frontBackDetection = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "frontBackMergingEnabled", {
		get: function () {
			return fiHub.state.frontBackMergingEnabled
		},
		set: function (v) {
			fiHub.state.frontBackMergingEnabled = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "frontBackMergingLocation", {
		get: function () {
			return fiHub.state.frontBackMergingLocation
		},
		set: function (v) {
			fiHub.state.frontBackMergingLocation = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "frontBackMergingRotation", {
		get: function () {
			return fiHub.state.frontBackMergingRotation
		},
		set: function (v) {
			fiHub.state.frontBackMergingRotation = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "frontBackMergingTarget", {
		get: function () {
			return fiHub.state.frontBackMergingTarget
		},
		set: function (v) {
			fiHub.state.frontBackMergingTarget = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "frontBackMergingTargetMode", {
		get: function () {
			return fiHub.state.frontBackMergingTargetMode
		},
		set: function (v) {
			fiHub.state.frontBackMergingTargetMode = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "frontBackMergingTargetSize", {
		get: function () {
			return fiHub.state.frontBackMergingTargetSize
		},
		set: function (v) {
			fiHub.state.frontBackMergingTargetSize = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "gamma", {
		get: function () {
			return fiHub.state.gamma
		},
		set: function (v) {
			fiHub.state.gamma = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "gammaFile", {
		get: function () {
			return fiHub.state.gammaFile
		},
		set: function (v) {
			fiHub.state.gammaFile = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "halftone", {
		get: function () {
			return fiHub.state.halftone
		},
		set: function (v) {
			fiHub.state.halftone = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "halftoneFile", {
		get: function () {
			return fiHub.state.halftoneFile
		},
		set: function (v) {
			fiHub.state.halftoneFile = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "highlight", {
		get: function () {
			return fiHub.state.highlight
		},
		set: function (v) {
			fiHub.state.highlight = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "hwCompression", {
		get: function () {
			return fiHub.state.hwCompression
		},
		set: function (v) {
			fiHub.state.hwCompression = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "imageScanner", {
		get: function () {
			return fiHub.state.imageScanner
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "indicator", {
		get: function () {
			return fiHub.state.indicator
		},
		set: function (v) {
			fiHub.state.indicator = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "isExistsFB", {
		get: function () {
			return fiHub.state.isExistsFB
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "jobControl", {
		get: function () {
			return fiHub.state.jobControl
		},
		set: function (v) {
			fiHub.state.jobControl = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "jobControlMode", {
		get: function () {
			return fiHub.state.jobControlMode
		},
		set: function (v) {
			fiHub.state.jobControlMode = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "jpegQuality", {
		get: function () {
			return fiHub.state.jpegQuality
		},
		set: function (v) {
			fiHub.state.jpegQuality = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "lengthDetection", {
		get: function () {
			return fiHub.state.lengthDetection
		},
		set: function (v) {
			fiHub.state.lengthDetection = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "longPage", {
		get: function () {
			return fiHub.state.longPage
		},
		set: function (v) {
			fiHub.state.longPage = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "multiFeed", {
		get: function () {
			return fiHub.state.multiFeed
		},
		set: function (v) {
			fiHub.state.multiFeed = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "multiFeedNotice", {
		get: function () {
			return fiHub.state.multiFeedNotice
		},
		set: function (v) {
			fiHub.state.multiFeedNotice = v
		}
	});	
	Object.defineProperty(fujitsu.fiscanner, "multiFeedModeChangeSize", {
		get: function () {
			return fiHub.state.multiFeedModeChangeSize
		},
		set: function (v) {
			fiHub.state.multiFeedModeChangeSize = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "noiseRejection", {
		get: function () {
			return fiHub.state.noiseRejection
		},
		set: function (v) {
			fiHub.state.noiseRejection = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "orientation", {
		get: function () {
			return fiHub.state.orientation
		},
		set: function (v) {
			fiHub.state.orientation = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "overScan", {
		get: function () {
			return fiHub.state.overScan
		},
		set: function (v) {
			fiHub.state.overScan = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "overwrite", {
		get: function () {
			return fiHub.state.overwrite
		},
		set: function (v) {
			fiHub.state.overwrite = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "pageCount", {
		get: function () {
			return fiHub.state.pageCount
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "paperProtection", {
		get: function () {
			return fiHub.state.paperProtection
		},
		set: function (v) {
			fiHub.state.paperProtection = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "paperSize", {
		get: function () {
			return fiHub.state.paperSize
		},
		set: function (v) {
			fiHub.state.paperSize = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "paperSupply", {
		get: function () {
			return fiHub.state.paperSupply
		},
		set: function (v) {
			fiHub.state.paperSupply = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "patchCodeDetection", {
		get: function () {
			return fiHub.state.patchCodeDetection
		},
		set: function (v) {
			fiHub.state.patchCodeDetection = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "patchCodeDirection", {
		get: function () {
			return fiHub.state.patchCodeDirection
		},
		set: function (v) {
			fiHub.state.patchCodeDirection = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "patchCodeType", {
		get: function () {
			return fiHub.state.patchCodeType
		},
		set: function (v) {
			fiHub.state.patchCodeType = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "patternRemoval", {
		get: function () {
			return fiHub.state.patternRemoval
		},
		set: function (v) {
			fiHub.state.patternRemoval = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "pixelType", {
		get: function () {
			return fiHub.state.pixelType
		},
		set: function (v) {
			fiHub.state.pixelType = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "punchHoleRemoval", {
		get: function () {
			return fiHub.state.punchHoleRemoval
		},
		set: function (v) {
			fiHub.state.punchHoleRemoval = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "punchHoleRemovalMode", {
		get: function () {
			return fiHub.state.punchHoleRemovalMode
		},
		set: function (v) {
			fiHub.state.punchHoleRemovalMode = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "regionLeft", {
		get: function () {
			return fiHub.state.regionLeft
		},
		set: function (v) {
			fiHub.state.regionLeft = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "regionLength", {
		get: function () {
			return fiHub.state.regionLength
		},
		set: function (v) {
			fiHub.state.regionLength = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "regionTop", {
		get: function () {
			return fiHub.state.regionTop
		},
		set: function (v) {
			fiHub.state.regionTop = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "regionWidth", {
		get: function () {
			return fiHub.state.regionWidth
		},
		set: function (v) {
			fiHub.state.regionWidth = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "resolution", {
		get: function () {
			return fiHub.state.resolution
		},
		set: function (v) {
			fiHub.state.resolution = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "reverse", {
		get: function () {
			return fiHub.state.reverse
		},
		set: function (v) {
			fiHub.state.reverse = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "rotation", {
		get: function () {
			return fiHub.state.rotation
		},
		set: function (v) {
			fiHub.state.rotation = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "scanContinue", {
		get: function () {
			return fiHub.state.scanContinue
		},
		set: function (v) {
			fiHub.state.scanContinue = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "scanContinueMode", {
		get: function () {
			return fiHub.state.scanContinueMode
		},
		set: function (v) {
			fiHub.state.scanContinueMode = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "scanCount", {
		get: function () {
			return fiHub.state.scanCount
		},
		set: function (v) {
			fiHub.state.scanCount = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "scanMode", {
		get: function () {
			return fiHub.state.scanMode
		},
		set: function (v) {
			fiHub.state.scanMode = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "sDTCSensitivity", {
		get: function () {
			return fiHub.state.sDTCSensitivity
		},
		set: function (v) {
			fiHub.state.sDTCSensitivity = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "sEE", {
		get: function () {
			return fiHub.state.sEE
		},
		set: function (v) {
			fiHub.state.sEE = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "selectOutputSize", {
		get: function () {
			return fiHub.state.selectOutputSize
		},
		set: function (v) {
			fiHub.state.selectOutputSize = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "shadow", {
		get: function () {
			return fiHub.state.shadow
		},
		set: function (v) {
			fiHub.state.shadow = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "sharpness", {
		get: function () {
			return fiHub.state.sharpness
		},
		set: function (v) {
			fiHub.state.sharpness = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "showSourceUI", {
		get: function () {
			return fiHub.state.showSourceUI
		},
		set: function (v) {
			fiHub.state.showSourceUI = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "silentMode", {
		get: function () {
			return fiHub.state.silentMode
		},
		set: function (v) {
			fiHub.state.silentMode = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "simpleSlicePatternRemoval", {
		get: function () {
			return fiHub.state.simpleSlicePatternRemoval
		},
		set: function (v) {
			fiHub.state.simpleSlicePatternRemoval = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "skipBlackPage", {
		get: function () {
			return fiHub.state.skipBlackPage
		},
		set: function (v) {
			fiHub.state.skipBlackPage = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "skipWhitePage", {
		get: function () {
			return fiHub.state.skipWhitePage
		},
		set: function (v) {
			fiHub.state.skipWhitePage = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "sourceCurrentScan", {
		get: function () {
			return fiHub.state.sourceCurrentScan
		},
		set: function (v) {
			fiHub.state.sourceCurrentScan = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "sRGB", {
		get: function () {
			return fiHub.state.sRGB
		},
		set: function (v) {
			fiHub.state.sRGB = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "synchronizationDigitalEndorser", {
		get: function () {
			return fiHub.state.synchronizationDigitalEndorser
		},
		set: function (v) {
			fiHub.state.synchronizationDigitalEndorser = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "threshold", {
		get: function () {
			return fiHub.state.threshold
		},
		set: function (v) {
			fiHub.state.threshold = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "twainDS", {
		get: function () {
			return fiHub.state.twainDS
		},
		set: function (v) {
			fiHub.state.twainDS = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "twainDSAnyPort", {
		get: function () {
			return fiHub.state.twainDSAnyPort
		},
		set: function (v) {
			fiHub.state.twainDSAnyPort = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "undefinedScanning", {
		get: function () {
			return fiHub.state.undefinedScanning
		},
		set: function (v) {
			fiHub.state.undefinedScanning = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "unit", {
		get: function () {
			return fiHub.state.unit
		},
		set: function (v) {
			fiHub.state.unit = v
		}
	});
	Object.defineProperty(fujitsu.fiscanner, "verticalLineReduction", {
		get: function () {
			return fiHub.state.verticalLineReduction
		},
		set: function (v) {
			fiHub.state.verticalLineReduction = v
		}
	});

	var fiHub;
	var convertToBase64;
	var convertToBlob;
	var deleteFile;

	function $() {
		console.log("initiate.js library is called.");
	}

	function Initialize(c) {
		fiHub = c;
		fiHub.client.onConnected = function(id) {
			console.log("Establish a connection with the server" + " |" + id);
			if (typeof (eval(fiHub.client.OnScannerReady)) == "function") {
				console.log("fiHub.client.OnScannerReady defined");
				fiHub.client.OnScannerReady();
			}
			else {
				console.log("fiHub.client.OnScannerReady undefined");
			}
		}
		c.client.OnConvertToBase64 = OnConvertToBase64Adpter;
		c.client.OnConvertToBlob = OnConvertToBlobAdpter;
		c.client.OnDeleteFile = OnDeleteFileAdpter;
	}

	function SetTwainDSInfo() {
		console.info("SetTwainDSInfo start");
		return fiHub.server.setTwainDSInfo();
	}

	function SetSourceCurrentScan() {
		console.info("SetSourceCurrentScan start");
		return fiHub.server.setSourceCurrentScan();
	}

	function OpenScanner() {
		console.info("OpenScanner start");
		return fiHub.server.openScanner();
	}

	function OpenScanner2() {
		console.info("OpenScanner2 start");
		return fiHub.server.openScanner2();
	}

	function SelectSource() {
		console.info("SelectSource start");
		return fiHub.server.selectSource();
	}

	function StartScan() {
		console.info("StartScan start");
		return fiHub.server.startScan();
	}

	function CloseScanner() {
		console.info("CloseScanner start");
		return fiHub.server.closeScanner();
	}
	
	function GetSourceCount() {
		console.info("GetSourceCount start");
		return fiHub.server.getSourceCount();
	}

	function GetTWAINTemplateCount() {
		console.info("GetTWAINTemplateCount start");
		return fiHub.server.getTWAINTemplateCount();
	}
	
	function GetSourceName(i) {
		console.info("GetSourceName start " + i);
		return fiHub.server.getSourceName(i);
	}

	function GetTWAINTemplateName(i) {
		console.info("GetTWAINTemplateName start " + i);
		return fiHub.server.getTWAINTemplateName(i);
	}

	function GetSourceSelect() {
		console.info("GetSourceSelect start");
		return fiHub.server.getSourceSelect();
	}

	function SetupDataSourceProperties() {
		console.info("SetupDataSourceProperties start");
		return fiHub.server.setupDataSourceProperties();
	}

	function GetTWAINTemplateSelect() {
		console.info("GetTWAINTemplateSelect start");
		return fiHub.server.getTWAINTemplateSelect();
	}

	function SelectSourceName(n) {
		console.info("SelectSourceName start");
		return fiHub.server.selectSourceName(n);
	}

	function SetTWAINTemplateSelect(n) {
		console.info("SetTWAINTemplateSelect start");
		return fiHub.server.setTWAINTemplateSelect(n);
	}

	function RegisterEvent(n, f) {
		console.info("RegisterEvent start");
		if (n == "OnScannerReady") {
			fiHub.client.OnScannerReady = f;
		}
		else if (n == "OnScanToFile") {
			fiHub.client.OnScanToFile = f;
		}
		else if (n == "OnDetectBarcode") {
			fiHub.client.OnDetectBarcode = f;
		}
		else if (n == "OnDetectBarcodeDetail") {
			fiHub.client.OnDetectBarcodeDetail = f;
		}
		else if (n == "OnDetectPatchCode") {
			fiHub.client.OnDetectPatchCode = f;
		}
		else if (n == "OnDetectJobSeparator") {
			fiHub.client.OnDetectJobSeparator = f;
		}
		else if (n == "OnAIQCResult") {
			fiHub.client.OnAIQCResult = f;
		}
		else if (n == "OnBlankPageResult") {
			fiHub.client.OnBlankPageResult = f;
		}
		else if (n == "OnMultiFeedResult") {
			fiHub.client.OnMultiFeedResult = f;
		}
		else if (n == "OnPageNumber") {
			fiHub.client.OnPageNumber = f;
		}
		else if (n == "OnAutoProfileSelection") {
			fiHub.client.OnAutoProfileSelection = f;
		}
		else if (n == "OnPagePartition") {
			fiHub.client.OnPagePartition = f;
		}
	}
	
	function ConvertToBase64(d, e) {
		convertToBase64 = e;
		fiHub.server.convertToBase64(d);
	}
	
	function OnConvertToBase64Adpter(r, d) {
		console.info("OnConvertToBase64 " + r);
		convertToBase64(r,d);
	}
	
	function ConvertToBlob(d, e) {
		convertToBlob = e;
		fiHub.server.convertToBlob(d);
	}
	
	function OnConvertToBlobAdpter(r, d) {
		console.info("OnConvertToBlob " + r);
		convertToBlob(r,d);
	}

	function DeleteFile(d, e) {
		deleteFile = e;
		fiHub.server.deleteFile(d);
	}

	function OnDeleteFileAdpter(r) {
		console.info("OnDeleteFile " + r);
		deleteFile(r);
	}

	function ClearPage() {
		console.info("ClearPage start");
		return fiHub.server.clearPage();
	}

	function FeederLoaded() {
		console.info("FeederLoaded start");
		return fiHub.server.feederLoaded();
	}

	function ScannerAvailable() {
		console.info("ScannerAvailable start");
		return fiHub.server.scannerAvailable();
	}

	function SetTopMostWindow(b) {
		console.info("SetTopMostWindow start");
		fiHub.server.setTopMostWindow(b);
	}

	function GetSerialNumber() {
		console.info("GetSerialNumber start ");
		return fiHub.server.getSerialNumber();
	}

	window['fujitsu']['fiscanner']['$'] = $;
	window['fujitsu']['fiscanner']['Initialize'] = Initialize;
	window['fujitsu']['fiscanner']['RegisterEvent'] = RegisterEvent;
	window['fujitsu']['fiscanner']['ConvertToBlob'] = ConvertToBlob;
	window['fujitsu']['fiscanner']['ConvertToBase64'] = ConvertToBase64;
	window['fujitsu']['fiscanner']['DeleteFile'] = DeleteFile;
	window['fujitsu']['fiscanner']['SetTwainDSInfo'] = SetTwainDSInfo;
	window['fujitsu']['fiscanner']['SetSourceCurrentScan'] = SetSourceCurrentScan;
	window['fujitsu']['fiscanner']['OpenScanner'] = OpenScanner;
	window['fujitsu']['fiscanner']['OpenScanner2'] = OpenScanner2;
	window['fujitsu']['fiscanner']['SelectSource'] = SelectSource;
	window['fujitsu']['fiscanner']['StartScan'] = StartScan;
	window['fujitsu']['fiscanner']['CloseScanner'] = CloseScanner;
	window['fujitsu']['fiscanner']['GetSourceCount'] = GetSourceCount;
	window['fujitsu']['fiscanner']['GetSourceName'] = GetSourceName;
	window['fujitsu']['fiscanner']['GetSourceSelect'] = GetSourceSelect;
	window['fujitsu']['fiscanner']['SetupDataSourceProperties'] = SetupDataSourceProperties;
	window['fujitsu']['fiscanner']['SelectSourceName'] = SelectSourceName;
	window['fujitsu']['fiscanner']['GetTWAINTemplateCount'] = GetTWAINTemplateCount;
	window['fujitsu']['fiscanner']['GetTWAINTemplateName'] = GetTWAINTemplateName;
	window['fujitsu']['fiscanner']['GetTWAINTemplateSelect'] = GetTWAINTemplateSelect;
	window['fujitsu']['fiscanner']['SetTWAINTemplateSelect'] = SetTWAINTemplateSelect;
	window['fujitsu']['fiscanner']['ClearPage'] = ClearPage;
	window['fujitsu']['fiscanner']['FeederLoaded'] = FeederLoaded;
	window['fujitsu']['fiscanner']['ScannerAvailable'] = ScannerAvailable;
	window['fujitsu']['fiscanner']['SetTopMostWindow'] = SetTopMostWindow;
	window['fujitsu']['fiscanner']['GetSerialNumber'] = GetSerialNumber;

})();