# sanctions-tracker

## getting started

```bash
npm i
```

## running the development server

```bash
npm start
```

Add files, edit your code, etc and the browser will automatically refresh with the appropriate changes.

## shipping code

You can provision the code for three different environments. It's important to specify one so that the code refers to the proper s3 endpoint fixtures.

You specify the environment by setting `NODE_ENV` as `production`, `testing`, or `staging`. Not supplying the variable defaults to `staging`.
```bash
NODE_ENV=production npm run release
NODE_ENV=production npm run releaseMap
```

Then simply copy the contents of `public/` to your final destination.

## whats in the redux state?

The data has been normalized:

```
{
    sanctions: {
        rawData: [
            {
                count: 3,
                date: '1994-09-28',
                program: 'IRAQ'
            }
            ...
        ],
        byProgram: {
            IRAQ: {
                count: 3,
                dates: [
                    {
                        date: '1994-09-28',
                        count: 3
                    },
                    {
                        date: '1994-10-05',
                        count: 3
                    }
                    ...
                ]
            },
            ...
        },
        byDate: {
            '1994-09-28': [
                {
                    program: 'IRAQ',
                    count: 3
                },
                {
                    program: 'HAITI',
                    count: 1996
                },
                ...
            ],
            ...
        }
    }
}
```
