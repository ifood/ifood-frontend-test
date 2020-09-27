module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
				"plugin:@typescript-eslint/recomended",
				"plugin:prettier/recomended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
				"react-hooks",
				"prettier"
    ],
    "rules": {
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "warn",
			"react/jsx-filename-extension": [
				1,
				{
					"extensions": [
						".tsx"
					]
				}
			],
			"import/prefer-default-export": "off",
			"import/extensions": [
				"error",
				"ignorePackages",
				{
					"ts": "never",
					"tsx": "never",
				}
			],
			"prettier/prettier": "error"
    },
		"settings": {
			"import/resolver": {
				"typescript": {}
			}
		}
};
