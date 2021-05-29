const delay = () =>
  new Promise(res =>
    setTimeout(() => {
      console.log("resolved");
      res("done");
    }, 1000)
  );

export default delay;
