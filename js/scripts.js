const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log(holidays.futureId || `ID ${futureId} not created yet`)

copied = holidays.christmas
copied = { 
    id: false,
    name: 'X-mas',
    date: new Date(`25 Dec ${currentYear}`)
}
const christmasDay = copied.date
const xMasDay = christmasDay.getDate()
const xMasmonth = christmasDay.getMonth() +1

holidays[0].date = new Date( `16 December ${currentYear}`),

correctDate = copied.date

console.log('ID change:', holidays.id ? copied.id : copied.id)
console.log('Name change:', holidays.name ? copied.name : copied.name)
console.log('Date change:', holidays.date ? copied.date : `${xMasDay.toString().padStart(2, 0)}/${xMasmonth.toString().padStart(2, 0)}/${currentYear}`)

isEarlier = copied.date <= holidays[6].date
console.log('New date is earlier:', isEarlier)
if (isEarlier) copied.date = correctDate

const firstHolidayTimestamp = Math.min (
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)

const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)

const firstHoliday = new Date(firstHolidayTimestamp)
const firstDay = firstHoliday.getDate()
const firstMonth = firstHoliday.getMonth() +1

const lastHoliday = new Date(lastHolidayTimestamp)
const lastDay = lastHoliday.getDate()
const lastMonth = lastHoliday.getMonth() +1

console.log(`${firstDay.toString().padStart(2, 0)}/${firstMonth.toString().padStart(2, 0)}/${currentYear}`)
console.log(`${lastDay}/${lastMonth}/${currentYear}`)

const randomHoliday = holidays[Math.floor(Math.random()*8)].date
const randomDays = randomHoliday.getDate()
const randomMonths = randomHoliday.getMonth() +1
console.log(`${randomDays.toString().padStart(2, 0)}/${randomMonths.toString().padStart(2, 0)}/${currentYear}`)