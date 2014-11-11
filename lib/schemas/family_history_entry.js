module.exports = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "identifiers": {
            "type": "array",
            "items": {
                "$ref": "http://local.com/common_models#/properties/cda_id"
            },
            "minItems": 1
        },
        "name": {
            "$ref": "http://local.com/common_models#/properties/cda_name"
        },
        "relationship": {
            "type": "string"
        },
        "dead": {
            "type": "boolean"
        },
        "conditions": {
            "type": "array",
            "items": {
                "$ref": "http://local.com/common_models#/properties/cda_coded_entry"
            },
            "minItems": 1
        },
        "dob": {
            "$ref": "http://local.com/common_models#/properties/cda_date"
        }
    },
    "additionalProperties": false,
    "required": ["name", "relationship"]
};