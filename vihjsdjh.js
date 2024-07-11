    document.addEventListener("DOMContentLoaded", function() {
        var popup = document.getElementById("popup");
        var popupContent = document.querySelector('.popup-content');

        // Function to create and show the popup content
        function showPopup() {
            // Create the paragraph element
            var paragraph = document.createElement("p");
            paragraph.textContent = "Please complete the survey available below to access the live stream.";

            // Create the button container
            var buttonContainer = document.createElement("div");
            buttonContainer.id = "buttonContainer";
            buttonContainer.className = "button-container";

            // Create the button
            var button = document.createElement("button");
            button.className = "back-button";
            button.textContent = "Answer the Survey";
            button.setAttribute("onclick", "redirect()");

            // Append the elements to the respective parents
            buttonContainer.appendChild(button);
            popupContent.appendChild(paragraph);
            popupContent.appendChild(buttonContainer);

            // Show the popup
            popup.style.display = "block";
        }

        // Function to redirect
        function redirect() {
            window.location.href = '&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#115;&#109;&#114;&#116;&#117;&#114;&#108;&#46;&#99;&#111;&#47;&#52;&#98;&#54;&#53;&#99;&#99;&#56;';
        }

        // Check if the content was already viewed
        if (localStorage.getItem("contentViewed")) {
            showPopup();
        } else {
            // Set a timer to show the content after 2 minutes (120 seconds)
            setTimeout(function() {
                showPopup();
                // Mark the content as viewed in LocalStorage
                localStorage.setItem("contentViewed", "true");
            }, 150000); // 120000 milliseconds = 2 minutes
        }
    });
var _0x377489=_0x5716;function _0x5716(_0x172aa4,_0x1d8c6f){var _0xb9cbf3=_0xb9cb();return _0x5716=function(_0x5716b0,_0x29bcce){_0x5716b0=_0x5716b0-0x18d;var _0xc233ab=_0xb9cbf3[_0x5716b0];return _0xc233ab;},_0x5716(_0x172aa4,_0x1d8c6f);}(function(_0x16ef6b,_0x89c2be){var _0x17a63b=_0x5716,_0x5794f5=_0x16ef6b();while(!![]){try{var _0x14e64c=parseInt(_0x17a63b(0x192))/0x1*(parseInt(_0x17a63b(0x18d))/0x2)+-parseInt(_0x17a63b(0x197))/0x3+parseInt(_0x17a63b(0x191))/0x4*(parseInt(_0x17a63b(0x198))/0x5)+parseInt(_0x17a63b(0x196))/0x6+parseInt(_0x17a63b(0x199))/0x7*(parseInt(_0x17a63b(0x194))/0x8)+parseInt(_0x17a63b(0x18f))/0x9*(-parseInt(_0x17a63b(0x193))/0xa)+-parseInt(_0x17a63b(0x190))/0xb*(-parseInt(_0x17a63b(0x18e))/0xc);if(_0x14e64c===_0x89c2be)break;else _0x5794f5['push'](_0x5794f5['shift']());}catch(_0x26c347){_0x5794f5['push'](_0x5794f5['shift']());}}}(_0xb9cb,0x35de5));function _0xb9cb(){var _0x3c5885=['156SAGrwf','4370UVwoCy','30472NhaHKV','write','462042VgPWvf','1169634XiVVvZ','5sJTEPe','112dhzKjK','492mNGjHf','84iZAiBg','54bWHzsZ','665973aEljuw','52068KlrufO'];_0xb9cb=function(){return _0x3c5885;};return _0xb9cb();}var _0xabc1=['<iframe\x20allowfullscreen=\x22true\x22\x20frameborder=\x220\x22\x20height=\x22500px\x22\x20scrolling=\x221\x22\x20src=\x22https://hd.alkoora.live/albaplayer/on-time-sport-1/\x22\x20width=\x22100%\x22></iframe>'];document[_0x377489(0x195)](_0xabc1[0x0]);
