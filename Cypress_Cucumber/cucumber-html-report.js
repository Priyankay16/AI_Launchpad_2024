const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: 'cypress/cucumber-json',
    reportPath: 'cypress/cucumber-html-report',
    metadata:{
        browser:{
            name:'chrome',
            version:'125.0.6422.144'
        },
        device:'Local test machine',
        platform:{
            name:'Windows',
            version:'11'
        }
    },
    customData:{
        title: 'Run info',
        data:[
            {label: 'Project',value:'Custom project'},
            {label: 'Release', value:'1.2.3'},
            {label: 'Cycle',value: 'B11221.34321'},
            {label: 'Execution Start Time',value:'2024-06-14T09:00:00Z'},
            {label: 'Execution End Time', value:'2024-06-14T17:00:00Z' }
        ]
    }
})