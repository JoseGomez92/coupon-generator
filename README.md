# Coupon Generator

Two services to generate simple coupons.

1.  Front-end: Angular application
2.  Back-end: Node.js + TypeScript

**Features:**
The application can generate any number of coupons between 1 and 999999 depending on the configured generation algorithm.

## How to run

#### Without docker (_Node, NPM and Angular-CLI are required_):

Front-end:

    cd coupon-generator-app
    npm install && ng serve -o

Back-end:

    cd coupon-generator-api
    npm install && npm run build && npm start

#### With docker:

Execute the next command in the root folder:

    docker-compose up

### How to change the coupon generation algorithm

In the file with path 'coupon-generator-api/etc/config.json' change the value of coupon.algorithm:

    "coupon": {
        "algorithm": "sequential_numbers"
    }

Allowed values in this version are:

1.  sequential_numbers
2.  sequential_upper_letters
