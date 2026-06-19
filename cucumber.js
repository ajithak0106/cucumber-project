module.exports ={
    default:{
        require:["tests/step/*.step.js",
                "tests/support/execution.js",
                "tests/support/hook.js"
        ],
        paths:["tests/feature/*.feature"],
        publishQuiet:true,
        format:["progress",
                "html:reports/cucumber-reports.html"
        ]
    }
}
