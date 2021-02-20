
const sock = new SockJS('');//todo
const client = Stomp.over(sock);
sock.onopen = function () {
    console.log('open');
    sock.send('test');
};

sock.onmessage = function (e) {
    console.log('message', e.data);
    sock.close();
};

sock.onclose = function () {
    console.log('close');
};

client.subscribe("", function (message) {//todo
    if (message.body) {
        alert("got message with body " + message.body)
    } else {
        alert("got empty message");
    }
});