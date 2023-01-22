import {io} from "socket.io-client";
function main(){
    
    const targetInput = document.getElementById("targetInput")as HTMLInputElement;
    const connectBtn = document.getElementById("connectBtn")as HTMLButtonElement;
    const connectedSocketId = document.getElementById("connectedSocketId") as HTMLInputElement;
    const messageList = document.getElementById("messageList")as HTMLDivElement;
    const messageInput = document.getElementById("messageInput") as HTMLInputElement;
    const sendBtn = document.getElementById("sendBtn") as HTMLButtonElement;
    
    const socket = io("http://localhost:5000"); //("http://당신의 IP:연결될 서버의 포트번호");
    socket.on("connect", handleSocketconnect);
}
main();