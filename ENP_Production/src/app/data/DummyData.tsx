
// dummy data for cycle details
const dates = [
    '2021-01-01', '2021-01-02', '2021-01-03', '2021-01-04', '2021-01-05', '2021-01-06', '2021-01-07', '2021-01-08', '2021-01-09',
    '2021-01-10', '2021-01-11', '2021-01-12', '2021-01-13', '2021-01-14', '2021-01-15', '2021-01-16', '2021-01-17', '2021-01-18',
    '2021-01-19', '2021-01-20', '2021-01-21', '2021-01-22', '2021-01-23', '2021-01-24', '2021-01-25', '2021-01-26', '2021-01-27',
    '2021-02-01', '2021-02-02', '2021-02-03', '2021-02-04', '2021-02-05', '2021-02-06', '2021-02-07', '2021-02-08', '2021-02-09',
    '2021-02-10', '2021-02-11', '2021-02-12', '2021-02-13', '2021-02-14', '2021-02-15', '2021-02-16', '2021-02-17', '2021-02-18',
    '2021-02-19', '2021-02-20', '2021-02-21', '2021-02-22', '2021-02-23', '2021-02-24', '2021-02-25', '2021-02-26', '2021-02-27',
    '2021-02-28', '2021-01-28', '2021-01-29', '2021-01-30', '2021-01-31', 
]

const shifts = ['D', 'N']

const times = [
    '00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',
]

const loaderUnit = ['EX60','EX63','EX64', 'EX60', 'EX67', 'EX71', 'EX53',]
const haulerUnit = ['DT09', 'DT101', 'DT104', 'EDT131', 'EDT132', 'EDT134', 'RH100', 'RH03' ]
const origins = ['AK2207164951', 'AK3218183216', 'AK2207165948', 'AK2216165066',]
const materials = ['A3HGL', 'WCPSTE', 'WASTE']
const destinations = ['CR02', 'CUT-1-DUMP',]
const nominals = [130, 49]
const weights = [130, 49]
const payloadWeights = [130, 49]
const reportedWeights = [130, 49]
const volumes = [33, 49]
const loads = [1]
const timeAtLoaders = [
    '00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',
]

const durations = [
   0, 1425, 4103, 1317, 14400, 1723, 21600, 25200, 28800,
]


// for each date, select hauler, loader, origin, destination, material, nominal, weight, payloadWeight, shift,
//reportedWeight, volume, load, timeAtLoader at duration at random 
export const CycleDetailsDummyData = dates.map((date, index) => {
    return {
        date: date,
        shift: shifts[Math.floor(Math.random() * shifts.length)],
        loaderUnit: loaderUnit[Math.floor(Math.random() * loaderUnit.length)],
        haulerUnit: haulerUnit[Math.floor(Math.random() * haulerUnit.length)],
        origin: origins[Math.floor(Math.random() * origins.length)],
        material: materials[Math.floor(Math.random() * materials.length)],
        destination: destinations[Math.floor(Math.random() * destinations.length)],
        nominal: nominals[Math.floor(Math.random() * nominals.length)],
        weight: weights[Math.floor(Math.random() * weights.length)],
        payloadWeight: payloadWeights[Math.floor(Math.random() * payloadWeights.length)],
        reportedWeight: reportedWeights[Math.floor(Math.random() * reportedWeights.length)],
        volume: volumes[Math.floor(Math.random() * volumes.length)],
        load: loads[Math.floor(Math.random() * loads.length)],
        timeAtLoader: timeAtLoaders[Math.floor(Math.random() * timeAtLoaders.length)],
        duration: durations[Math.floor(Math.random() * durations.length)],
    }
    
})
