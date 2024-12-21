let tablinks = document.getElementsByClassName("tab-links");
        let tabcontents = document.getElementsByClassName("tab-contents");
        function opentab(tabname)
        {
            for(tablink of tablinks)
            {
             tablink.classList.remove("active-links");
            }
            for(tabcontent of tabcontents)
             {
            tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-links");
            document.getElementById(tabname).classList.add("active-tab");
        }

        // OnClick// 
        function downloadPDF() {
            
            const pdfUrl = 'Resume/UDAY KIRAN RESUME.pdf'; 
           
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = pdfUrl.split('/').pop(); 
            link.click();
        }