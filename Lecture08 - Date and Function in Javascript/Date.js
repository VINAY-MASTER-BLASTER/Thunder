// new - empty new Object 
// const now = new Date()
// console.log(now)

// 2026-07-12T15:28:03.268Z
// 3:28pm   + 5.30UTC - Universal Time 

// console.log(now.toString()) //Local TIme zone 


// How My JavaScript Know the Time 
// They get the Time And Date Infronation from the local Computer System not from the Internet 


// ! How your system get infromation of time 

// console.log(now.getDate())
// console.log(now.getDay())
// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getMinutes())
// console.log(now.getSeconds())

// jan: 0, Feb:1, mar:2 _______ dec:11
// mon: 1, tue:2 _________ sun:7
// javaScript build with in 10 days so they have inconsistency
// Legacy Code : system run 2005 
// Libraraies : use karenge : Date Function ki jagha



// const now = Date.now()
// console.log(now)  //timestamp : millisecond : 1783917675783   

// timestamp Convert to String 
// const da = new Date(now)
// console.log(da)  //UTC Time 


// timestamp // millisecond : number store 
// const now = Date.now() 
// Number : 8byte : number overflow condition aajyegi
// modern system crash ho jayenge 
// console.log(now)


// new Date(year, month, day, hours, minutes second, millisecond)
// const myDate = new Date(2026, 8, 4, 6, 20, 11, 125)
// console.log(myDate)