import { Observable } from 'rxjs';

let observable = Observable.create((observer: any) => {
  try {
  observer.next('Hello World of Observables!');
  observer.next('How are you?');
  observer.complete();
  observer.next('This will not send');
} catch(err) {
  observer.error(err);
}
}); //accepts a single argument subscriber

observable.subscribe
  ((x: any) => addItem(x),
  (error: any) => addItem(error),
  () => addItem("Completed")
);

function addItem(val:any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}