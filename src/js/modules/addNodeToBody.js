export const addNodeToBody = () => {
  const helloNode = document.createElement('h2');
  helloNode.innerText = "Javascript is working correctly !!";
  document.body.appendChild(helloNode);
}