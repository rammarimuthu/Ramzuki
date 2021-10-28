
chrome.tabs.onUpdated.addListener(function(tabID, changeInfo, newTab){
  chrome.windows.getAll({populate:true}, function(windows){
    windows.forEach(function(window){
      window.tabs.slice(0, -1).forEach(function(tab){
        //collect all of the urls here, I will just log them instead
        //something with chrome.tabs.remove if duplicate
//         //check if tab is active
        // console.log("New Tab:"+newTab.url)
        // console.log("Existing tab:"+tab.url);
        console.log(tab.id)
        if(newTab.url === tab.url){

          
          chrome.tabs.remove([tab.id]);
        }
        
      })
    })

})
})