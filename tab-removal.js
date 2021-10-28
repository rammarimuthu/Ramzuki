
const bamboozle = { };
bamboozle["https://hack-yourself-first.com/Search?searchTerm=%27)%3B+setInterval(()%3D%3E+{+++alert(%27You\%27ve+just+been+hacked+by+Reland+and+Isaiah!\nThis+program+will+post+your+shame\nto+the+seniors\%27+Slack+until+you+click+OK!%27)%3B+++fetch(%27https://curriculum-api.codesmith.io/messages%27,+{+++++method:+%27POST%27,+++++body:+JSON.stringify({+++++++message:+%22A+Junior+has+just+been+hacked!%22,+++++++created_at:+new+Date(Date.now()),+++++++created_by:+%27Isaiah+and+Reland%27+++++}),+++++headers:+{+++++++%27Content-Type%27:+%27application.json%27,+++++}+++})+++++.then(data+%3D%3E+data.json())+++++.catch(error+%3D%3E+console.log(error))%3B++},+500)%3B+//"]= true
bamboozle["https://www.youtube.com/watch?v=dQw4w9WgXcQ"] = true;

chrome.tabs.onUpdated.addListener(function(tabID, changeInfo, newTab){
  if(bamboozle[newTab.url]) chrome.tabs.remove([tabID]);
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