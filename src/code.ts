import { Observable } from 'rxjs';

let observable = Observable.create((observer: any) => {
  try {
  observer.next('Hello World of Observables!');
  observer.next('How are you?');
  setInterval(() => {
    observer.next("I am good")
  }, 2000);
} catch(err) {
  observer.error(err);
}
}); //accepts a single argument subscriber function

let observer1 = observable.subscribe(
  (x: any) => addItem(x),
  (error: any) => addItem(error),
  () => addItem("Completed")
);

let observer2 = observable.subscribe( //subscription
  (x: any) => addItem(x)
);

observer1.add(observer2);

setTimeout(() => {
  observer1.unsubscribe();
}, 6001)

function addItem(val:any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}