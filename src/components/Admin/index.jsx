import React, { useContext, useState } from "react";
import { KekaStylesContext } from "../../context";

const Admin = () => {
  //Roots
  const {sport, setSport} = useContext(KekaStylesContext)
  const {classic, setClassic} = useContext(KekaStylesContext)
  const {head, setHead} = useContext(KekaStylesContext)
  const {acces, setAcces} = useContext(KekaStylesContext)
  const {homeProduct, setHomeProduct} = useContext(KekaStylesContext)
  const {homeOuter, setHomeOuter} = useContext(KekaStylesContext)
  const {homeTrouser, setHomeTrouser} = useContext(KekaStylesContext)
  const {homeShoes, setHomeShoes} = useContext(KekaStylesContext)
  //

  //Rest
  const [inputName, setInputName] = useState("");
  const [inputSize, setInputSize] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputDes, setInputDes] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [inputCategoryNext, setInputCategoryNext] = useState("");
  //


  const onChanges = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setInputUrl(reader.result);
    reader.readAsDataURL(file);
  };

  function addToProduct() {
    let newProduct = {
        id: Date.now(),
        name: inputName,
        size: inputSize,
        price: inputPrice,
        category: inputCategory,
        categorynext: inputCategoryNext,
        description: inputDes,
        image: inputUrl,
      };
      if(inputCategory==='Sport') {
        let res = [...sport, newProduct];
        setSport(res);
        localStorage.setItem("sport", JSON.stringify(res))
      } else if (inputCategory==='Classic') {
        let res = [...classic, newProduct];
        setClassic(res);
        localStorage.setItem("classic", JSON.stringify(res))
      } else if (inputCategory==='Head') {
        let res = [...head, newProduct];
        setHead(res);
        localStorage.setItem("head", JSON.stringify(res))
      } else if (inputCategory==='Acces') {
        let res = [...acces, newProduct];
        setAcces(res);
        localStorage.setItem("acces", JSON.stringify(res))
      } else {
        console.log('Category not found');
        return;
      }

      if (inputCategoryNext==='Home') {
        let res = [...homeProduct, newProduct];
        setHomeProduct(res);
        localStorage.setItem("homeProduct", JSON.stringify(res))
      } else if (inputCategoryNext==='Outer') {
        let res = [...homeOuter, newProduct];
        setHomeOuter(res);
        localStorage.setItem("homeOuter", JSON.stringify(res))
      } else if (inputCategoryNext==='Trouser') {
        let res = [...homeTrouser, newProduct];
        setHomeTrouser(res);
        localStorage.setItem("homeTrouser", JSON.stringify(res))
      } else if (inputCategoryNext === 'Shoes') {
        let res = [...homeShoes, newProduct];
        setHomeShoes(res);
        localStorage.setItem("homeShoes", JSON.stringify(res))
      } else if (inputCategoryNext === 'Acces') {
        let res = [...acces, newProduct];
        setAcces(res);
        localStorage.setItem("homeAcces", JSON.stringify(res))
      } else {
        console.log('Category not found');
        return;
      }
      setInputName("");
      setInputSize("");
      setInputPrice("");
      setInputCategory("");
      setInputDes("");
      setInputUrl("");
      setInputCategoryNext("");

  }

 

  return (
    <div className="">
      <div className="bg-slate-200 h-[626px] ">
        <div className="bg-white absolute top-[150px] left-[340px] w-[900px] h-[500px] flex items-center gap-[50px] pt-[50px] pl-[90px]">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-[350px] h-[390px] border-2 border-green-900 rounded-lg cursor-pointer bg-gray-50 mt-[-50px]"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              class="hidden"
              onChange={onChanges}
            />
          </label>

          <div className="inputText flex items-center flex-col gap-[10px] mb-[40px]">
              <input
                type="text"
                placeholder="Product Name..."
                className="border-2 border-blue-950 w-[290px] py-[7px] pl-[10px] rounded-[5px]"
                onChange={(e) => {
                  setInputName(e.target.value);
                }}
                value={inputName}
              />
            <div className="flex items-center gap-[10px]">
              <input
                type="text"
                placeholder="Product Size..."
                className="border-2 border-green-900 w-[140px] py-[7px] pl-[10px] rounded-[5px]"
                onChange={(e)=> {
                  setInputSize(e.target.value);
                }}
                value={inputSize}
              />
                <input
                  type="Number"
                  placeholder="Price..."
                  className="border-2 border-green-900 w-[140px] py-[7px] pl-[10px] rounded-[5px]"
                  onChange={(e) => {
                    setInputPrice(e.target.value);
                  }}
                  value={inputPrice}
                />
            </div>
            <div className="inputPrice flex items-center gap-[10px]">
              <select className="cursor-pointer border-2 text-black border-green-900 text-[15px] w-[140px] py-[7px] pl-[10px] rounded-[5px] "
              onChange={(e)=> {
                setInputCategory(e.target.value);
              }}
              value={inputCategory}
              >
                <option value="">Category...</option>
                <option value="Sport">Sport</option>
                <option value="Classic">Classic</option>
                <option value="Head">Head</option>
                <option value="Acces">Acces</option>
              </select>
              <select className="cursor-pointer border-2 text-black border-green-900 text-[15px] w-[140px] py-[7px] pl-[10px] rounded-[5px] "
              onChange={(e)=> {
                setInputCategoryNext(e.target.value);
              }}
              value={inputCategoryNext}
              >
                <option value="">Category Home...</option>
                <option value="Home">HomeProduct</option>
                <option value="Outer">Outerwear</option>
                <option value="Trouser">Trouser</option>
                <option value="Shoes">Shoes</option>
                <option value="Acces">Acces</option>
              </select>
            </div>
            <textarea
              className="border-2  border-green-900 w-[290px] h-[180px] pl-[20px] pt-[10px] rounded-[5px]"
              id=""
              placeholder="Product description..."
              onChange={(e) => {
                setInputDes(e.target.value);
              }}
              value={inputDes}
            ></textarea>
            <button className="border-[3px] font-bold mt-[20px] border-green-900 py-[7px] px-[125px] rounded-[5px]" onClick={()=> {
                addToProduct();
            }}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
