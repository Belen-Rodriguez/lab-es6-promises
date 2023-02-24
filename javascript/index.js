// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
  */



// Iteration 1 - using callbacks

getInstruction(
  "mashedPotatoes", 0, 
  (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction(
      "mashedPotatoes", 1, 
      (step2) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
          getInstruction(
            "mashedPotatoes", 2, 
            (step3) => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
                getInstruction(
                  "mashedPotatoes", 3,
                  (step4) => {
                    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
                      getInstruction(
                        "mashedPotatoes", 4,
                        (step5) => {
                          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li><li>Mashed Potatoes are ready!</li>`;
                                console.log('finish');
                        },
                        (error) => console.log(error)
                      );
                  },
                  (error) => console.log(error)
                );
            },
            (error) => console.log(error)
          );
      }, 
      (error) => console.log(error)
    );
  }, 
  (error) => console.log(error)
);



// Iteration 2 - using promises

obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak',1);
  })
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak',2);
  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak',3);
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak',4);
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak',5);
  })
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak',6);
  })
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak',7);
  })
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li><li>steak is ready!</li>`
  })
  .catch((err) => console.log(err));

// Iteration 3 using async/await


async function brusselsSproutsSteps(){
  try{
    const stepOne = await obtainInstruction("brusselsSprouts", 0);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${stepOne}</li>`
    console.log(stepOne);
    const stepTwo = await obtainInstruction("brusselsSprouts", 1)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${stepTwo}</li>`
    const stepThree = await obtainInstruction("brusselsSprouts", 2)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${stepThree}</li>`
    const stepFour = await obtainInstruction("brusselsSprouts", 3)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${stepFour}</li>`
    const stepFive = await obtainInstruction("brusselsSprouts", 4)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${sstepFive}</li>`
    const stepSix = await obtainInstruction("brusselsSprouts", 5)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${stepSix}</li>`
    const stepSeven = await obtainInstruction("brusselsSprouts", 6)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${stepSeven}</li>`
    const stepEight = await obtainInstruction("brusselsSprouts", 7)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${stepEight}</li>`
  } catch(err){
    console.error(err);
  }
}


// Bonus 2 - Promise all
// ...

const broccoliPromises = []

broccoli.forEach((eachStepBr, index) => {
  const proms = obtainInstruction("broccoli",index);
  console.log(proms)
  broccoliPromises.push(proms);
})

console.log(broccoliPromises);

Promise.all(broccoliPromises)
  .then(data => {

    //document.querySelector("#broccoli").innerHTML += `<li>${data}</li>`;

    const broccoliContainer = document.querySelector('#broccoli');

    data.forEach(brStep => {
    document.querySelector("#broccoli").innerHTML += `<li>${brStep}</li>`
    })

  })
  .catch((err) => console.log(err));

