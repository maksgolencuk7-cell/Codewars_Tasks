function ipv4Parser(ip, mask){
  let ipArr = ip.split('.').map(Number);
  let maskArr = mask.split('.').map(Number);
  
  let net = [];
  let host = [];
  
  for (let i = 0; i < 4; i++) {
    net.push(ipArr[i] & maskArr[i]);
    host.push(ipArr[i] & (255 - maskArr[i]));
  }
  
  return [net.join('.'), host.join('.')];
}
