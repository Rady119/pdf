document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        en: {
            homeLink: "Home",
            toolsLink: "Tools",
            languageLabel: "Choose Language:",
            pdfToWordTitle: "Convert PDF to Word",
            pdfToWordDesc: "Upload a PDF file to convert it to an editable Word document.",
            compressPdfTitle: "Compress PDF",
            compressPdfDesc: "Upload a PDF file to reduce its size without losing quality.",
            excelToPdfTitle: "Convert Excel to PDF",
            excelToPdfDesc: "Upload an Excel file to convert it to PDF format.",
            convertButton: "Convert",
            compressButton: "Compress",
            downloadButton: "Download File",
            statusConverting: "Converting file...",
            statusCompressing: "Compressing file...",
            statusSuccess: "File processed successfully!",
            statusError: "Please select a file first.",
            statusApiError: "An error occurred during the conversion. Please try again later.",
        },
        ar: {
            homeLink: "الرئيسية",
            toolsLink: "الأدوات",
            languageLabel: "اختر اللغة:",
            pdfToWordTitle: "تحويل PDF إلى Word",
            pdfToWordDesc: "قم برفع ملف PDF لتحويله إلى مستند Word قابل للتحرير.",
            compressPdfTitle: "ضغط ملفات PDF",
            compressPdfDesc: "قم برفع ملف PDF لتقليل حجمه بدون فقدان الجودة.",
            excelToPdfTitle: "تحويل Excel إلى PDF",
            excelToPdfDesc: "قم برفع ملف Excel لتحويله إلى صيغة PDF.",
            convertButton: "تحويل",
            compressButton: "ضغط",
            downloadButton: "تحميل الملف",
            statusConverting: "جارٍ تحويل الملف...",
            statusCompressing: "جارٍ ضغط الملف...",
            statusSuccess: "تم معالجة الملف بنجاح!",
            statusError: "يرجى اختيار ملف أولاً.",
            statusApiError: "حدث خطأ أثناء التحويل. يرجى المحاولة لاحقاً.",
        },
        hi: {
            homeLink: "होम",
            toolsLink: "टूल्स",
            languageLabel: "भाषा चुनें:",
            pdfToWordTitle: "PDF को Word में बदलें",
            pdfToWordDesc: "एक PDF फ़ाइल अपलोड करें जिसे संपादन योग्य Word दस्तावेज़ में बदला जा सके।",
            compressPdfTitle: "PDF को संपीड़ित करें",
            compressPdfDesc: "गुणवत्ता खोए बिना PDF फ़ाइल का आकार कम करने के लिए अपलोड करें।",
            excelToPdfTitle: "Excel को PDF में बदलें",
            excelToPdfDesc: "Excel फ़ाइल को PDF प्रारूप में बदलने के लिए अपलोड करें।",
            convertButton: "बदलें",
            compressButton: "संपीड़ित करें",
            downloadButton: "फ़ाइल डाउनलोड करें",
            statusConverting: "फ़ाइल को बदला जा रहा है...",
            statusCompressing: "फ़ाइल को संपीड़ित किया जा रहा है...",
            statusSuccess: "फ़ाइल सफलतापूर्वक संसाधित हुई!",
            statusError: "कृपया पहले एक फ़ाइल चुनें।",
            statusApiError: "रूपांतरण के दौरान एक त्रुटि हुई। कृपया बाद में पुन: प्रयास करें।",
        },
        fr: {
            homeLink: "Accueil",
            toolsLink: "Outils",
            languageLabel: "Choisir la langue:",
            pdfToWordTitle: "Convertir PDF en Word",
            pdfToWordDesc: "Téléchargez un fichier PDF pour le convertir en document Word modifiable.",
            compressPdfTitle: "Compresser PDF",
            compressPdfDesc: "Téléchargez un fichier PDF pour réduire sa taille sans perdre en qualité.",
            excelToPdfTitle: "Convertir Excel en PDF",
            excelToPdfDesc: "Téléchargez un fichier Excel pour le convertir au format PDF.",
            convertButton: "Convertir",
            compressButton: "Compresser",
            downloadButton: "Télécharger le fichier",
            statusConverting: "Conversion du fichier en cours...",
            statusCompressing: "Compression du fichier en cours...",
            statusSuccess: "Fichier traité avec succès!",
            statusError: "Veuillez d'abord sélectionner un fichier.",
            statusApiError: "Une erreur s'est produite lors de la conversion. Veuillez réessayer plus tard.",
        },
        de: {
            homeLink: "Startseite",
            toolsLink: "Werkzeuge",
            languageLabel: "Sprache auswählen:",
            pdfToWordTitle: "PDF in Word konvertieren",
            pdfToWordDesc: "Laden Sie eine PDF-Datei hoch, um sie in ein bearbeitbares Word-Dokument umzuwandeln.",
            compressPdfTitle: "PDF komprimieren",
            compressPdfDesc: "Laden Sie eine PDF-Datei hoch, um deren Größe ohne Qualitätsverlust zu reduzieren.",
            excelToPdfTitle: "Excel in PDF konvertieren",
            excelToPdfDesc: "Laden Sie eine Excel-Datei hoch, um sie in das PDF-Format zu konvertieren.",
            convertButton: "Konvertieren",
            compressButton: "Komprimieren",
            downloadButton: "Datei herunterladen",
            statusConverting: "Datei wird konvertiert...",
            statusCompressing: "Datei wird komprimiert...",
            statusSuccess: "Datei erfolgreich verarbeitet!",
            statusError: "Bitte wählen Sie zuerst eine Datei aus.",
            statusApiError: "Bei der Konvertierung ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.",
        }
    };

    const languageSelect = document.getElementById("language");

    const getTranslation = (key) => {
        const lang = languageSelect.value;
        return translations[lang][key];
    };

    const changeLanguage = () => {
        const lang = languageSelect.value;
        const translation = translations[lang];
        document.getElementById("languageLabel").textContent = translation.languageLabel;
        document.getElementById("pdfToWordTitle").textContent = translation.pdfToWordTitle;
        document.getElementById("pdfToWordDesc").textContent = translation.pdfToWordDesc;
        document.getElementById("compressPdfTitle").textContent = translation.compressPdfTitle;
        document.getElementById("compressPdfDesc").textContent = translation.compressPdfDesc;
        document.getElementById("excelToPdfTitle").textContent = translation.excelToPdfTitle;
        document.getElementById("excelToPdfDesc").textContent = translation.excelToPdfDesc;
        document.getElementById("convertPdfToWord").textContent = translation.convertButton;
        document.getElementById("compressPdf").textContent = translation.compressButton;
        document.getElementById("convertExcelToPdf").textContent = translation.convertButton;
        document.getElementById("downloadPdfToWord").textContent = translation.downloadButton;
        document.getElementById("downloadCompressedPdf").textContent = translation.downloadButton;
        document.getElementById("downloadExcelToPdf").textContent = translation.downloadButton;
    };

    languageSelect.addEventListener("change", changeLanguage);

    const handleFileUpload = async (fileInputId, statusId, downloadLinkId, endpoint, statusConvertingKey) => {
        const fileInput = document.getElementById(fileInputId);
        const statusElement = document.getElementById(statusId);
        const downloadLink = document.getElementById(downloadLinkId);

        if (fileInput.files.length === 0) {
            statusElement.textContent = getTranslation("statusError");
            return;
        }

        const file = fileInput.files[0];
        const formData = new FormData();
        formData.append("file", file);

        statusElement.textContent = getTranslation(statusConvertingKey);
        downloadLink.style.display = "none";

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (response.ok && data.download_link) {
                statusElement.textContent = getTranslation("statusSuccess");
                downloadLink.href = data.download_link;
                downloadLink.style.display = "inline-block";
            } else {
                statusElement.textContent = data.error || getTranslation("statusApiError");
            }
        } catch (error) {
            console.error("Error:", error);
            statusElement.textContent = getTranslation("statusApiError");
        }
    };

    document.getElementById("convertPdfToWord").addEventListener("click", () => {
        handleFileUpload("pdfFile", "pdfToWordStatus", "downloadPdfToWord", "/convert-pdf-to-word", "statusConverting");
    });

    document.getElementById("compressPdf").addEventListener("click", () => {
        handleFileUpload("compressPdfFile", "compressPdfStatus", "downloadCompressedPdf", "/compress-pdf", "statusCompressing");
    });

    document.getElementById("convertExcelToPdf").addEventListener("click", () => {
        handleFileUpload("excelFile", "excelToPdfStatus", "downloadExcelToPdf", "/convert-excel-to-pdf", "statusConverting");
    });

    // Initialize language
    changeLanguage();
});
