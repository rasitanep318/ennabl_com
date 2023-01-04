# ennabl_com

To run all tests:
```shell
npm run test
```

To generate more tests:
```shell
npm run codegen
```

## Test suite

| id  | titlle | steps | expected result |
| --- | --- | --- | --- |
| 1  | To open email | 1. Navigate to ennabl.com <br>2. Click link "Аbout" in the panel<br>3. Click link "Оpportunities" in burger menu<br>4. Scroll down | The email info@ennabl.com is displayed |
| 2  | Go to the page "Privacy Policy" | 1. Navigate to ennabl.com <br>2. Click link "Mission/Solutions/About/News and events" in the panel<br>3. Click link "Privacy Policy" | The page "Privacy Policy" is opened |
| 3 | Go to the page "Mission" | 1. Navigate to ennabl.com <br>2. Click link "Mission" in the panel | The page "Our Mission" is opened |
| 4 | Go to the page "Our story" | 1. Navigate to ennabl.com <br>2. Click link "Аbout" in the panel<br>3. Click link "Our story" in burger menu | The page "About Us" is opened |
| 5 | Go to the page "News and events" | 1. Navigate to ennabl.com <br>2. Click link "News and events" in the panel | The page "News & events" is opened |

## Bug report

| Environment | titlle | steps | expected result | Actual Result | Link |
| --- | --- | --- | --- | --- | --- |
|Windows 11: Chrom 108 Firefox 108 | Transparent section bar | 1. Navigate to ennabl.com <br>2. Click link "Request a demo" in the panel<br>3. Scroll down | The panel header is transparent | The panel header is not transparent | [video](https://drive.google.com/file/d/1OIf1cGPrmq_euNImAjQVO0aWJu9XMRt2/view?usp=share_link) |
