module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "max-len": ["error", { "ignoreComments": true, "ignoreStrings": true, "ignoreTemplateLiterals": true  }],
        "no-underscore-dangle": "off"
    }
}