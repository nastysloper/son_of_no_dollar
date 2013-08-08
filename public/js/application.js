


function reqListener () {
  console.log(this.responseText);
};

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;

// The third argument here "true" sets the call to be asynchronous.
// If omitted, it will still be asynch
oReq.open("get", "yourFile.txt", true);

oReq.send();
