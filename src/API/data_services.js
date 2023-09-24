const getData = async () => {
      const res = await fetch('/public/data/data.json');
      const data = await res.json();
      return data;
    };
    
    export { getData };
    