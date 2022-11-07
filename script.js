// const p = new Promise((resolve, reject) => {
//   const button = document.querySelectorAll('button');

//   if (button.length > 0) {
//     resolve(button.length);
//   } else {
//     reject("No button in UI");
//   }
// });

// p.then((data) => {
//   console.log(data);
// });

// p.catch((err) => {
//   console.log(err);
// });

// console.log('Line 1');
// console.log('Line 2');
// console.log('Line 3');
class Promise {
  constructor(fun) {
    this.fun = fun;
    this.resolve = (data) => {
      this.data = data;
    };
    this.reject = (err) => {
      this.err = err;
    };
    fun(this.resolve, this.reject);
  }

  then(cb) {
    this.data && cb(this.data);
  }

  catch(cb) {
    this.err && cb(this.err);
  }
}

const loopPromise = new Promise((resolve, reject) => {
  const button = document.querySelectorAll('button');
  if (button.length > 0) resolve('DATA .....');
  else reject('ERRR');
});

loopPromise.then((data) => {
  console.log('SUCCESS', data);
});

loopPromise.catch((err) => {
  console.log('ERROR', err);
});
