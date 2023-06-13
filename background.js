chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        title: "Metinsel Kopyala",
        contexts: ["page"],
        id: "copyContextMenu",
    });
});

// background-script.js

// CSS değişikliklerini uygulayan fonksiyon
function yeni(tabId, changeInfo, tab) {
    if (tab.url === 'https://debis.deu.edu.tr/debis.php' && changeInfo.status === 'complete') {
     chrome.scripting.insertCSS({
            target: {
                 tabId: tab.id
            },
             files: ['./stylesc.css'],
         })    
         chrome.scripting.insertCSS({
            target: {
                 tabId: tab.id
            },
             files: ['./all.css'],
         })    
    chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            function: () => {if (document.querySelector("body > table.borderall > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > td:nth-child(1) > form")) 
            {
                document.documentElement.innerHTML = '';
                var code = `<!doctype html>
                <html lang="en">
                
                <head>
                  <title>D.E.U Bilisim Servisleri</title>
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                  <link rel="stylesheet" href="./dist/styles.css">
                  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
                    crossorigin="anonymous">
                  <style>
                  .login{
                    background: url('https://wallpaperaccess.com/full/2637581.jpg')
                  }
                  </style>  
                </head>
                
                <body class="h-screen font-sans login bg-cover">
                <div class="container mx-auto h-full flex flex-1 justify-center items-center">
                  <div class="w-full max-w-lg">
                    <div class="leading-loose">
                    <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl" name="giris" action="" method="POST">
                      <p class="text-gray-800 font-medium text-center text-lg font-bold">Giriş</p>
                      <div class="">
                          <label class="block text-sm text-gray-00" for="username">Kullanıcı Adınız</label>
                          <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="username" name="username" type="text" required="" placeholder="Kullanıcı Adı" aria-label="username">
                      </div>
                      <div class="mt-2">
                          <label class="block text-sm text-gray-600" for="password">Şifreniz</label>
                          <input class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="password" name="password" type="password" required="" placeholder="*******" aria-label="password">
                      </div>
                      <div class="mt-2">
                          <label class="block text-sm text-gray-600" for="emailHost">Email Türü</label>
                          <select class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="emailHost" size="1">
                              <option value="deu.edu.tr">deu.edu.tr</option>
                              <option value="ogr.deu.edu.tr" selected>ogr.deu.edu.tr</option>
                          </select>
                      </div>
                      <div class="mt-4 items-center justify-between">
                          <center><button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Giriş Yap</button></center>
                          <center><a class="inline-block right-0 align-baseline font-bold text-sm text-500 hover:text-blue-800" href="https://debishs.deu.edu.tr/default.aspx">Şifremi Unuttum</a></center>
                    </div>
                  </form>
                  
                
                    </div>
                  </div>
                </div>
                </body>
                
                </html>
                `;
                document.documentElement.innerHTML = code;
            }
        else {

            var isim;
            isim=document.querySelector("body > div:nth-child(1) > div").textContent.substring(11)
            document.documentElement.innerHTML=`<!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <meta name="keywords" content="tailwind,tailwindcss,tailwind css,css,starter template,free template,admin templates, admin template, admin dashboard, free tailwind templates, tailwind example">
                <!-- Css -->
                <link rel="stylesheet" href="./dist/styles.css">
                <link rel="stylesheet" href="./dist/all.css">
                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,600i,700,700i" rel="stylesheet">
                <title>Dokuz Eylül Universitesi Bilgi Sistemi</title>
            </head>
            
            <body>
            <!--Container -->
            <div class="mx-auto bg-grey-400">
                <!--Screen-->
                <div class="min-h-screen flex flex-col">
                    <!--Header Section Starts Here-->
                    <header class="bg-nav">
                        <div class="flex justify-between">
                            <div class="p-1 mx-3 inline-flex items-center">
                                <i class="fas fa-bars pr-2 text-white" onclick="sidebarToggle()"></i>
                                <h1 class="text-white p-2">Logo</h1>
                            </div>
                            <div class="p-1 flex flex-row items-center">
                               <a href="https://debis.deu.edu.tr/php_library/Cikis.php" class="text-white p-2 no-underline hidden md:block lg:block">`+isim+`</a>
                                
                            </div>
                        </div>
                    </header>
                    <!--/Header-->
            
                    <div class="flex flex-1">
                        <!--Sidebar-->
                        <aside id="sidebar" class="bg-side-nav w-1/2 md:w-1/6 lg:w-1/6 border-r border-side-nav hidden md:block lg:block">
            
                            <ul class="list-reset flex flex-col">
                                <li class=" w-full h-full py-3 px-2 border-b border-light-border bg-white">
                                    <a href="https://debis.deu.edu.tr/debis.php"
                                       class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                                        <i class="fas fa-tachometer-alt float-left mx-2"></i>
                                        Anasayfa
                                        <span><i class="fas fa-angle-right float-right"></i></span>
                                    </a>
                                </li>
                                    
                                    
                                          <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/DersProgrami/index.php">Ders programım</a></li>
                                          <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/OgrenciNotu/index.php">Not görme ekranı</a></li>
                                          <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/ydy_not/index.php"><b>YDY</b> Not görme ekranı</a></li>     
                                          <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/ydy_devamsizlik/index.php"><b>YDY</b> Ögrenci Devamsızlık Bilgileri</a></li>                  
                                          <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/transcript/index.php">Not döküm belgesi</a></li>
                                          <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="http://akillikart.deu.edu.tr/yurt/yurtBasvuru/index.php">Yurt Başvurusu</a></li>   
                                          <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://mezun.deu.edu.tr/" target="_blank">Mezun Bilgi Formu</a></li>         
                                          <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debishs.deu.edu.tr/" target="_blank">Şifre değiştirme</a></li> 
                                          <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debis.deu.edu.tr/php_library/Cikis.php" >Çıkış Yap</a></li> 
                                          
                                    </ul>
                                </li>
                            </ul>
            
                        </aside>
                        <!--/Sidebar-->
                        <!--Main-->
                        <main class="bg-white-300 flex-1 p-3 overflow-hidden">
            
                            <div class="flex flex-col">
                                <!-- Stats Row Starts Here -->
                                <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                                    <div class="shadow-lg bg-red-vibrant border-l-8 hover:bg-red-vibrant-dark border-red-vibrant-dark mb-2 p-2 md:w-1/4 mx-2">
                                        <div class="p-4 flex flex-col">
                                            <a href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/DersProgrami/index.php" class="no-underline text-white text-2xl">
                                                Ders Programı
                                            </a>
                                            <a href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/DersProgrami/index.php" class="no-underline text-white text-lg">
                                                İçin
                                            </a>
                                        </div>
                                    </div>
            
                                    <div class="shadow bg-info border-l-8 hover:bg-info-dark border-info-dark mb-2 p-2 md:w-1/4 mx-2">
                                        <div class="p-4 flex flex-col">
                                            <a href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/OgrenciNotu/index.php" class="no-underline text-white text-2xl">
                                                Not Ekranı
                                            </a>
                                            <a href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/OgrenciNotu/index.php" class="no-underline text-white text-lg">
                                                İçin
                                            </a>
                                        </div>
                                    </div>
            
                                    <div class="shadow bg-warning border-l-8 hover:bg-warning-dark border-warning-dark mb-2 p-2 md:w-1/4 mx-2">
                                        <div class="p-4 flex flex-col">
                                            <a href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/transcript/index.php" class="no-underline text-white text-2xl">
                                                Not Döküm Belgesi
                                            </a>
                                            <a href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/transcript/index.php" class="no-underline text-white text-lg">
                                                İçin
                                            </a>
                                        </div>
                                    </div>
            
                                    <div class="shadow bg-success border-l-8 hover:bg-success-dark border-success-dark mb-2 p-2 md:w-1/4 mx-2">
                                        <div class="p-4 flex flex-col">
                                            <a href="https://debishs.deu.edu.tr/" class="no-underline text-white text-2xl">
                                                Şifre Değiştirmek
                                            </a>
                                            <a href="https://debishs.deu.edu.tr/" class="no-underline text-white text-lg">
                                                İçin
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </main>
                        <!--/Main-->
                    </div>
                    <!--Footer-->
                    <footer class="bg-grey-darkest text-white p-2">
                        <div class="flex flex-1 mx-auto">&copy; My Design</div>
                    </footer>
                    <!--/footer-->
            
                </div>
            
            </div>
            <script src="./main.js"></script>
            </body>
            
            </html>`
        }}
        })
    }
    if (tab.url === 'https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/OgrenciNotu/index.php' && changeInfo.status === 'complete'){
        chrome.scripting.insertCSS({
            target: {
                 tabId: tab.id
            },
             files: ['./stylesc.css'],
         })    
         chrome.scripting.insertCSS({
            target: {
                 tabId: tab.id
            },
             files: ['./all.css'],
         })
         chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            function: () =>
            {
                var isim;
            isim=document.querySelector("body > div:nth-child(1) > div").textContent.substring(11)
            document.querySelector("body > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(2)").className='tasi1';
            document.querySelector("body > table:nth-child(2)").className="tasi2 text-white text-2xl";
            var bos=document.querySelector("body > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(2)").innerHTML
            if(document.querySelector("body > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(3)") || document.querySelector("main")){
                document.querySelector("body > div").innerHTML=`<div id="ustuste">
                <!--Container -->
                <div class="mx-auto bg-grey-400">
                    <!--Screen-->
                    <div class="min-h-screen flex flex-col">
                        <!--Header Section Starts Here-->
                        <header class="bg-nav">
                            <div class="flex justify-between">
                                <div class="p-1 mx-3 inline-flex items-center">
                                    <i class="fas fa-bars pr-2 text-white" onclick="sidebarToggle()"></i>
                                    <h1 class="text-white p-2">Logo</h1>
                                </div>
                                <div class="p-1 flex flex-row items-center">
                                   <a href="https://debis.deu.edu.tr/php_library/Cikis.php" class="text-white p-2 no-underline hidden md:block lg:block">`+isim+`</a>
                                    
                                </div>
                            </div>
                        </header>
                        <!--/Header-->
                        <div class="flex flex-1">
                            <!--Sidebar-->
                            <aside id="sidebar" class="bg-side-nav w-1/2 md:w-1/6 lg:w-1/6 border-r border-side-nav hidden md:block lg:block">
                
                                <ul class="list-reset flex flex-col">
                                
                                
                                <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debis.deu.edu.tr/debis.php">Anasayfa</a></li>
                                <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/DersProgrami/index.php">Ders programım</a></li>
                                <li class=" w-full h-full py-3 px-2 border-b border-light-border bg-white">
                                    <a href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/OgrenciNotu/index.php"
                                       class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                                        <i class="fas fa-tachometer-alt float-left mx-2"></i>
                                        Not görme ekranı
                                        <span><i class="fas fa-angle-right float-right"></i></span>
                                    </a>
                                </li>
                                              <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/ydy_not/index.php"><b>YDY</b> Not görme ekranı</a></li>     
                                              <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/ydy_devamsizlik/index.php"><b>YDY</b> Ögrenci Devamsızlık Bilgileri</a></li>                  
                                              <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/transcript/index.php">Not döküm belgesi</a></li>
                                              <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="http://akillikart.deu.edu.tr/yurt/yurtBasvuru/index.php">Yurt Başvurusu</a></li>   
                                              <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://mezun.deu.edu.tr/" target="_blank">Mezun Bilgi Formu</a></li>         
                                              <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debishs.deu.edu.tr/" target="_blank">Şifre değiştirme</a></li> 
                                              <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debis.deu.edu.tr/php_library/Cikis.php" >Çıkış Yap</a></li> 
                                              
                                        </ul>
                                    </li>
                                </ul>
                
                            </aside>
                            <!--/Sidebar-->
                            <!--Main-->
                            <main class="bg-white-300 flex-1 p-3 overflow-hidden">
                                <div class="flex flex-col">
                                    <!-- Stats Row Starts Here -->
                                    <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                                        <div class="shadow-lg bg-red-vibrant border-l-8 hover:bg-red-vibrant-dark border-red-vibrant-dark mb-2 p-2 md:w-1/4 mx-2">
                                            <div class="p-4 flex flex-col">
                                                <a href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/DersProgrami/index.php" class="no-underline text-white text-2xl">
                                                    Ders Programı
                                                </a>
                                                <a href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/DersProgrami/index.php" class="no-underline text-white text-lg">
                                                    İçin
                                                </a>
                                            </div>
                                        </div>
                            
                                        <div class="shadow bg-info border-l-8 hover:bg-info-dark border-info-dark mb-2 p-2 md:w-1/4 mx-2">
                                            <div class="p-4 flex flex-col">
                                                <a href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/OgrenciNotu/index.php" class="no-underline text-white text-2xl">
                                                    Not Ekranı
                                                </a>
                                                <a href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/OgrenciNotu/index.php" class="no-underline text-white text-lg">
                                                    İçin
                                                </a>
                                            </div>
                                        </div>
                            
                                        <div class="shadow bg-warning border-l-8 hover:bg-warning-dark border-warning-dark mb-2 p-2 md:w-1/4 mx-2">
                                            <div class="p-4 flex flex-col">
                                                <a href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/transcript/index.php" class="no-underline text-white text-2xl">
                                                    Not Döküm Belgesi
                                                </a>
                                                <a href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/transcript/index.php" class="no-underline text-white text-lg">
                                                    İçin
                                                </a>
                                            </div>
                                        </div>
                            
                                        <div class="shadow bg-success border-l-8 hover:bg-success-dark border-success-dark mb-2 p-2 md:w-1/4 mx-2">
                                            <div class="p-4 flex flex-col">
                                                <a href="https://debishs.deu.edu.tr/" class="no-underline text-white text-2xl">
                                                    Şifre Değiştirmek
                                                </a>
                                                <a href="https://debishs.deu.edu.tr/" class="no-underline text-white text-lg">
                                                    İçin
                                                </a>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </main>
                            <!--/Main-->
                        </div>
                        <!--Footer-->
                        <footer class="bg-grey-darkest text-white p-2">
                            <div class="flex flex-1 mx-auto">&copy; My Design</div>
                        </footer>
                        <!--/footer-->
                
                    </div>
                
                </div>
            </div>`
            }
            else 
            {
                
                var tablobos=document.querySelector("body > table:nth-child(4) > tbody > tr:nth-child(2)").innerHTML;
                
                document.querySelector("body > div").innerHTML=`<div id="ustuste">
                <!--Container -->
                <div class="mx-auto bg-grey-400">
                    <!--Screen-->
                    <div class="min-h-screen flex flex-col">
                        <!--Header Section Starts Here-->
                        <header class="bg-nav">
                            <div class="flex justify-between">
                                <div class="p-1 mx-3 inline-flex items-center">
                                    <i class="fas fa-bars pr-2 text-white" onclick="sidebarToggle()"></i>
                                    <h1 class="text-white p-2">Logo</h1>
                                </div>
                                <div class="p-1 flex flex-row items-center">
                                   <a href="https://debis.deu.edu.tr/php_library/Cikis.php" class="text-white p-2 no-underline hidden md:block lg:block">`+isim+`</a>
                                    
                                </div>
                            </div>
                        </header>
                        <!--/Header-->
                
                        <div class="flex flex-1">
                            <!--Sidebar-->
                            <aside id="sidebar" class="bg-side-nav w-1/2 md:w-1/6 lg:w-1/6 border-r border-side-nav hidden md:block lg:block">
                
                            <ul class="list-reset flex flex-col">
                                
                                
                            <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debis.deu.edu.tr/debis.php">Anasayfa</a></li>
                            <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/DersProgrami/index.php">Ders programım</a></li>
                            <li class=" w-full h-full py-3 px-2 border-b border-light-border bg-white">
                                <a href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/OgrenciNotu/index.php"
                                   class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                                    <i class="fas fa-tachometer-alt float-left mx-2"></i>
                                    Not görme ekranı
                                    <span><i class="fas fa-angle-right float-right"></i></span>
                                </a>
                            </li>
                                          <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/ydy_not/index.php"><b>YDY</b> Not görme ekranı</a></li>     
                                          <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/ydy_devamsizlik/index.php"><b>YDY</b> Ögrenci Devamsızlık Bilgileri</a></li>                  
                                          <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/transcript/index.php">Not döküm belgesi</a></li>
                                          <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="http://akillikart.deu.edu.tr/yurt/yurtBasvuru/index.php">Yurt Başvurusu</a></li>   
                                          <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://mezun.deu.edu.tr/" target="_blank">Mezun Bilgi Formu</a></li>         
                                          <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debishs.deu.edu.tr/" target="_blank">Şifre değiştirme</a></li> 
                                          <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debis.deu.edu.tr/php_library/Cikis.php" >Çıkış Yap</a></li> 
                                          
                                    </ul>
                                </li>
                            </ul>
                
                            </aside>
                            <!--/Sidebar-->
                            <!--Main-->
                            <main class="bg-white-300 flex-1 p-3 overflow-hidden">
                                <div class="flex flex-col">
                                    <!-- Stats Row Starts Here -->
                                    <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                                        <div class="shadow-lg bg-red-vibrant border-l-8 hover:bg-red-vibrant-dark border-red-vibrant-dark mb-2 p-2 md:w-1/4 mx-2">
                                            <div class="p-4 flex flex-col">
                                                <a href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/DersProgrami/index.php" class="no-underline text-white text-2xl">
                                                    Ders Programı
                                                </a>
                                                <a href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/DersProgrami/index.php" class="no-underline text-white text-lg">
                                                    İçin
                                                </a>
                                            </div>
                                        </div>
                            
                                        <div class="shadow bg-info border-l-8 hover:bg-info-dark border-info-dark mb-2 p-2 md:w-1/4 mx-2">
                                            <div class="p-4 flex flex-col">
                                                <a href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/OgrenciNotu/index.php" class="no-underline text-white text-2xl">
                                                    Not Ekranı
                                                </a>
                                                <a href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/OgrenciNotu/index.php" class="no-underline text-white text-lg">
                                                    İçin
                                                </a>
                                            </div>
                                        </div>
                            
                                        <div class="shadow bg-warning border-l-8 hover:bg-warning-dark border-warning-dark mb-2 p-2 md:w-1/4 mx-2">
                                            <div class="p-4 flex flex-col">
                                                <a href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/transcript/index.php" class="no-underline text-white text-2xl">
                                                    Not Döküm Belgesi
                                                </a>
                                                <a href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/transcript/index.php" class="no-underline text-white text-lg">
                                                    İçin
                                                </a>
                                            </div>
                                        </div>
                            
                                        <div class="shadow bg-success border-l-8 hover:bg-success-dark border-success-dark mb-2 p-2 md:w-1/4 mx-2">
                                            <div class="p-4 flex flex-col">
                                                <a href="https://debishs.deu.edu.tr/" class="no-underline text-white text-2xl">
                                                    Şifre Değiştirmek
                                                </a>
                                                <a href="https://debishs.deu.edu.tr/" class="no-underline text-white text-lg">
                                                    İçin
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                            
                            <!--/Main-->
                        </div>
                        <!--Footer-->
                        <footer class="bg-grey-darkest text-white p-2">
                            <div class="flex flex-1 mx-auto">&copy; My Design</div>
                        </footer>
                        <!--/footer-->
                
                    </div>
                
                </div>
            </div>`
              }
        }})
    }

    if (tab.url === 'https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/DersProgrami/index.php' && changeInfo.status === 'complete'){
        chrome.scripting.insertCSS({
            target: {
                 tabId: tab.id
            },
             files: ['./stylesc.css'],
         })    
         chrome.scripting.insertCSS({
            target: {
                 tabId: tab.id
            },
             files: ['./all.css'],
         })
         chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            function: () =>
            {
                var isim,tablo;
                tablo=document.querySelector("body > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(2)").innerHTML
            isim=document.querySelector("body > div:nth-child(1) > div").textContent.substring(11)
            document.documentElement.innerHTML=`<!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <meta name="keywords" content="tailwind,tailwindcss,tailwind css,css,starter template,free template,admin templates, admin template, admin dashboard, free tailwind templates, tailwind example">
                <!-- Css -->
                <link rel="stylesheet" href="./dist/styles.css">
                <link rel="stylesheet" href="./dist/all.css">
                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,600i,700,700i" rel="stylesheet">
                <title>Dokuz Eylül Universitesi Bilgi Sistemi</title>
            </head>
            
            <body>
            <!--Container -->
            <div class="mx-auto bg-grey-400">
                <!--Screen-->
                <div class="min-h-screen flex flex-col">
                    <!--Header Section Starts Here-->
                    <header class="bg-nav">
                        <div class="flex justify-between">
                            <div class="p-1 mx-3 inline-flex items-center">
                                <i class="fas fa-bars pr-2 text-white" onclick="sidebarToggle()"></i>
                                <h1 class="text-white p-2">Logo</h1>
                            </div>
                            <div class="p-1 flex flex-row items-center">
                               <a href="https://debis.deu.edu.tr/php_library/Cikis.php" class="text-white p-2 no-underline hidden md:block lg:block">`+isim+`</a>
                                
                            </div>
                        </div>
                    </header>
                    <!--/Header-->
            
                    <div class="flex flex-1">
                        <!--Sidebar-->
                        <aside id="sidebar" class="bg-side-nav w-1/2 md:w-1/6 lg:w-1/6 border-r border-side-nav hidden md:block lg:block">
            
                            <ul class="list-reset flex flex-col">
                                <li class=" w-full h-full py-3 px-2 border-b border-light-border bg-white">
                                    <a href="https://debis.deu.edu.tr/debis.php"
                                       class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                                        <i class="fas fa-tachometer-alt float-left mx-2"></i>
                                        Anasayfa
                                        <span><i class="fas fa-angle-right float-right"></i></span>
                                    </a>
                                </li>
                                    
                                    
                                          <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/DersProgrami/index.php">Ders programım</a></li>
                                          <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/OgrenciNotu/index.php">Not görme ekranı</a></li>
                                          <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/ydy_not/index.php"><b>YDY</b> Not görme ekranı</a></li>     
                                          <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/ydy_devamsizlik/index.php"><b>YDY</b> Ögrenci Devamsızlık Bilgileri</a></li>                  
                                          <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/transcript/index.php">Not döküm belgesi</a></li>
                                          <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="http://akillikart.deu.edu.tr/yurt/yurtBasvuru/index.php">Yurt Başvurusu</a></li>   
                                          <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://mezun.deu.edu.tr/" target="_blank">Mezun Bilgi Formu</a></li>         
                                          <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debishs.deu.edu.tr/" target="_blank">Şifre değiştirme</a></li> 
                                          <li class="w-full h-full py-3 px-2 border-b border-light-border" ><a class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" href="https://debis.deu.edu.tr/php_library/Cikis.php" >Çıkış Yap</a></li> 
                                          
                                    </ul>
                                </li>
                            </ul>
            
                        </aside>
                        <!--/Sidebar-->
                        <!--Main-->
                        <main class="bg-white-300 flex-1 p-3 overflow-hidden">
            
                            <div class="flex flex-col">
                                <!-- Stats Row Starts Here -->
                                <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                                    <div class="shadow-lg bg-red-vibrant border-l-8 hover:bg-red-vibrant-dark border-red-vibrant-dark mb-2 p-2 md:w-1/4 mx-2">
                                        <div class="p-4 flex flex-col">
                                            <a href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/DersProgrami/index.php" class="no-underline text-white text-2xl">
                                                Ders Programı
                                            </a>
                                            <a href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/DersProgrami/index.php" class="no-underline text-white text-lg">
                                                İçin
                                            </a>
                                        </div>
                                    </div>
            
                                    <div class="shadow bg-info border-l-8 hover:bg-info-dark border-info-dark mb-2 p-2 md:w-1/4 mx-2">
                                        <div class="p-4 flex flex-col">
                                            <a href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/OgrenciNotu/index.php" class="no-underline text-white text-2xl">
                                                Not Ekranı
                                            </a>
                                            <a href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/OgrenciNotu/index.php" class="no-underline text-white text-lg">
                                                İçin
                                            </a>
                                        </div>
                                    </div>
            
                                    <div class="shadow bg-warning border-l-8 hover:bg-warning-dark border-warning-dark mb-2 p-2 md:w-1/4 mx-2">
                                        <div class="p-4 flex flex-col">
                                            <a href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/transcript/index.php" class="no-underline text-white text-2xl">
                                                Not Döküm Belgesi
                                            </a>
                                            <a href="https://debis.deu.edu.tr/OgrenciIsleri/Ogrenci/transcript/index.php" class="no-underline text-white text-lg">
                                                İçin
                                            </a>
                                        </div>
                                    </div>
            
                                    <div class="shadow bg-success border-l-8 hover:bg-success-dark border-success-dark mb-2 p-2 md:w-1/4 mx-2">
                                        <div class="p-4 flex flex-col">
                                            <a href="https://debishs.deu.edu.tr/" class="no-underline text-white text-2xl">
                                                Şifre Değiştirmek
                                            </a>
                                            <a href="https://debishs.deu.edu.tr/" class="no-underline text-white text-lg">
                                                İçin
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                `+tablo+`
                            </div>
                        </main>
                        <!--/Main-->
                    </div>
                    <!--Footer-->
                    <footer class="bg-grey-darkest text-white p-2">
                        <div class="flex flex-1 mx-auto">&copy; My Design</div>
                    </footer>
                    <!--/footer-->
            
                </div>
            
            </div>
            <script src="./main.js"></script>
            </body>
            
            </html>`
            
            }
            
        })}
    }
  
  // Sayfa yüklenirken CSS değişikliklerini uygula
  chrome.tabs.onUpdated.addListener(yeni);
