# Laravel-calendar
###### Laravel v8.83.27 (PHP v7.3.0)

##### A simple calendar app built with Laravel + FullCalendar.js + AJAX and MySQL
##### The project is designed to strengthen knowledge in building projects on Laravel using AJAX

## Used Libraries

- [FullCalendar.js](https://github.com/fullcalendar/fullcalendar)
- [SweetAlert2](https://github.com/sweetalert2/sweetalert2)

## Install

- Clone repository ```https://github.com/AndrewYaremenko/Laravel-calendar```
- Navigate to the project directory
- Connect the required libraries: **composer install**
- Connect the npm: **npm install**
- Copy and rename **.env.example** to **.env** and changes 
<pre>
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
</pre>
- Migrate tables to the database: **php artisan migrate**

### Video presentation 
[Link to Youtube](https://youtu.be/EGRiR0pIv8Y)