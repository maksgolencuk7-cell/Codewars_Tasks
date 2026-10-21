function domainName(url){
let cleanUrl = url.replace('http://', '').replace('https://', '').replace('www.', '');
    return cleanUrl.split('.')[0];
}
