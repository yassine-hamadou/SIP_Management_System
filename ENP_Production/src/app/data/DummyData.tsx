
// dummy data for testing ProLoaderUnit
const dates = [
    '2021-01-01', '2021-01-02', '2021-01-03', '2021-01-04', '2021-01-05', '2021-01-06', '2021-01-07', '2021-01-08', '2021-01-09',
    '2021-01-10', '2021-01-11', '2021-01-12', '2021-01-13', '2021-01-14', '2021-01-15', '2021-01-16', '2021-01-17', '2021-01-18',
    '2021-01-19', '2021-01-20', '2021-01-21', '2021-01-22', '2021-01-23', '2021-01-24', '2021-01-25', '2021-01-26', '2021-01-27',
    '2021-02-01', '2021-02-02', '2021-02-03', '2021-02-04', '2021-02-05', '2021-02-06', '2021-02-07', '2021-02-08', '2021-02-09',
    '2021-02-10', '2021-02-11', '2021-02-12', '2021-02-13', '2021-02-14', '2021-02-15', '2021-02-16', '2021-02-17', '2021-02-18',
    '2021-02-19', '2021-02-20', '2021-02-21', '2021-02-22', '2021-02-23', '2021-02-24', '2021-02-25', '2021-02-26', '2021-02-27',
    '2021-02-28', '2021-01-28', '2021-01-29', '2021-01-30', '2021-01-31', 
]

const shifts = ['Day', 'Night']

const times = [
    '00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',
]

const loaders = ['EX64', 'EX60', 'EX67',]
const haulers = ['Samuel Opoku', 'Unknown']
const origins = ['AK2207164951', 'AK3218183216', 'AK2207165948', 'AK2216165066',]
const materials = ['A3HGL', 'WCPSTE', 'WASTE']
const destinations = ['CR02', 'CUT-1-DUMP',]
const nominals = [130, 49]
const weights = [130, 49]
const payloadWeights = [130, 49]
const reportedWeights = [130, 49]
const volumes = [130, 49]
const loads = [1]
const timeAtLoaders = [
    '00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',
]
//seconds
const durations = [
   0, 1425, 4103, 1317, 14400, 1723, 21600, 25200, 28800,
]



//use the dummy data to create a list of ProLoaderUnit objects
export const CycleDetailsData = dates.map((date, index) => {
    return {
        date: date,
        shift: shifts[index % 2],
        time: times[index],
        loader: loaders[index % 3],
        hauler: haulers[index % 2],
        origin: origins[index % 4],
        material: materials[index % 3],
        destination: destinations[index % 2],
        nominal: nominals[index % 2],
        weight: weights[index % 2],
        payloadWeight: payloadWeights[index % 2],
        reportedWeight: reportedWeights[index % 2],
        volume: volumes[index % 2],
        load: loads[index % 1],
        timeAtLoader: timeAtLoaders[index],
        duration: durations[index],
    }
})
