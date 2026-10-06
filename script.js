const onCalBtnClick = () => {
  try {
    let height = document.getElementById("ht").value;
    let weight = document.getElementById("wt").value;

    height = height / 100;
    let bmi = weight / (height * height);
    console.log(bmi);

    let category;

    if (bmi < 18.5) {
      category = "Under weight";
    } else if (bmi < 25) {
      category = "Normal weight";
    } else if (bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obesity";
    }

    document.getElementById("val").value = bmi.toFixed(2);

    document.getElementById("category").value = category;

    let obj = {
      height: document.getElementById("ht").value,
      weight: document.getElementById("wt").value,
      bmi: bmi.toFixed(2),
      category: category,
    };

    let jsonObj = JSON.stringify(obj);
    localStorage.setItem("data", jsonObj);

    alert("Successfully Calculated");
  } catch (error) {
    console.log(error);
    alert("Value not calculated");
  }
};

const getData = () => {
  try {
    let data = localStorage.getItem("data");

    if (data) {
      data = JSON.parse(data);
      document.getElementById("ht").value = data.height;
      document.getElementById("wt").value = data.weight;
      document.getElementById("val").value = data.bmi;
      document.getElementById("category").value = data.category;
    }
  } catch (error) {
    console.log(error);
    alert("Not able to get data");
  }
};

getData();

const onClearBtnClick = () => {
  try {
    localStorage.removeItem("data");
    alert("Successfully Deleted");
  } catch (error) {
    console.log(error);
    alert("deletion failed");
  }
};
