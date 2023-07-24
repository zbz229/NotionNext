import React from 'react'
import BLOG from '@/blog.config'
// import DarkModeButton from '@/components/DarkModeButton'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const copyrightDate = (function() {
    if (Number.isInteger(BLOG.SINCE) && BLOG.SINCE < currentYear) {
      return BLOG.SINCE + '-' + currentYear
    }
    return currentYear
  })()

  return (
    <footer
      className='relative z-10 dark:bg-black flex-shrink-0 bg-hexo-light-gray justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm p-6'
    >
      {/* <DarkModeButton/> */}

      <i className='fas fa-copyright' /> {`${copyrightDate}`} <span><i className='mx-1 animate-pulse fas fa-heart'/> <a href={BLOG.LINK} className='underline font-bold  dark:text-gray-300 '>{BLOG.AUTHOR}</a>.<br/>

      {BLOG.BEI_AN && <><i className='fas fa-shield-alt' /> <a href='https://beian.miit.gov.cn/' className='mr-2'>{BLOG.BEI_AN}</a><br/></>}

      <span className='hidden busuanzi_container_site_pv'>
            <i className='fas fa-eye'/><span className='px-1 busuanzi_value_site_pv'> </span>  </span>
      <span className='pl-2 hidden busuanzi_container_site_uv'>
        <i className='fas fa-users'/> <span className='px-1 busuanzi_value_site_uv'> </span> </span>
        <h1 className='text-xs pt-4 text-light-400 dark:text-gray-400'>{title} {BLOG.BIO && <>|</>} {BLOG.BIO}</h1>
      </span><br/>
  
<div>51Sec Apps</div>
<script async src="https://fundingchoicesmessages.google.com/i/pub-5660349373091698?ers=1" nonce="71EKVshklXofUN3O1mph_A"></script><script nonce="71EKVshklXofUN3O1mph_A">(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();</script>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5660349373091698"
     crossorigin="anonymous"></script>

  <!-- Ezoic - bottom_of_page 129 - bottom_of_page -->
  <div id="ezoic-pub-ad-placeholder-129"> 
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5660349373091698"
     crossorigin="anonymous">
   </script>  
  </div>
  <!-- End Ezoic - bottom_of_page 129 - bottom_of_page -->
<!--开站时间开始-->       
<center>
        <br />
  </span>
            <span class="nav-item">
                <a class="nav-link" href="https://blog.51sec.org/2022/05/onepoint-use-cloudflare-workers-kv-to.html" target="_blank">
             <span id="timeDate">Up Days...</span><span id="times">Up Time...</span> <script language="javascript"> 
    var now = new Date();
    function createtime(){
        var grt= new Date("05/27/2021 00:00:00");/*---这里是网站的启用时间--*/
        now.setTime(now.getTime()+250);
        days = (now - grt ) / 1000 / 60 / 60 / 24;
        dnum = Math.floor(days);
        hours = (now - grt ) / 1000 / 60 / 60 - (24 * dnum);
        hnum = Math.floor(hours);
        if(String(hnum).length ==1 ){hnum = "0" + hnum;}
        minutes = (now - grt ) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum);
        mnum = Math.floor(minutes);
        if(String(mnum).length ==1 ){mnum = "0" + mnum;}
        seconds = (now - grt ) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
        snum = Math.round(seconds);
        if(String(snum).length ==1 ){snum = "0" + snum;}
        document.getElementById("timeDate").innerHTML = "This site has been running "+dnum+" days ";
        document.getElementById("times").innerHTML = hnum + " hours " + mnum + " minutes " + snum + " seconds.";
    }
    setInterval("createtime()",250); 
</script>



<style>
#iaMFGndsgOhR {
display: none;
top: 50%;
left: 50%;
width: 50em;
height: 25em;
margin-top: -20em;
margin-left: -20em;
border: 1px solid #666;
background: #D30000;
position: fixed;
margin-bottom: 30px;
padding: 20px 10px;
font-size: large;
text-align: center;
font-weight: bold;
color: #fff;
border-radius: 5px;
}
</style>

<div id="iaMFGndsgOhR">
<br>
  Our website is made possible by displaying online advertisements to our visitors.<br><br><br>
  Please consider supporting us by disabling your ad blocker.<br><br><br>
  Please turn off your Adsblocker to support 51sec!<br><br><br>
  Thank you!<br><br>
  51sec.org!
</div>

<script src="https://51sec.org/adex.js" type="text/javascript"></script>
<script type="text/javascript">

if(!document.getElementById('eNmOUiSgyxfM')){
  document.getElementById('iaMFGndsgOhR').style.display='block';
}

</script>
       


    </footer>
  )
}

export default Footer
