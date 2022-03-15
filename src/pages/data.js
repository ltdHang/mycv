const data = { 
  about: {
    name: 'Lê Thị Diệu Hằng',
    dayOfBirth: '13/08/1998',
    description: 'Giới thiệu về bản thân',
    tdtu_icon: './img/about/ueh_icon.jpg',
    github: 'https://github.com/ltdHang',
    avatar:'./img/about/avatar.png',
    age:24,
    email: 'Lethidieuhang1308@gmail.com',
    phone: '0326 976 777',
    location: 'TP HCM',
    education: [ {school: 'Đại Học Kinh Tế TP. HCM', time: '2016 - 2020', gpa: 'GPA: 8.05/10',major: 'Kinh Doanh Thương Mại'}, ],
    ceritficate: ['2020 : Chứng chỉ nghiệp vụ khai báo Hải quan', 
                  '2019 : Chứng chỉ xuất nhập khẩu - Lê Ánh',
                  '2010 : Toeic'],
    work: [ {company: 'NPV EXPRESS & LOGISTIC CO., LTD', time: '10/2019 - Hiện tại', 
            task :[ 
                    '<b>Nhân viên chứng từ khai báo Hải quan</b>',
                    '- Key Account',
                    '- Nhân viên có KPI xuất sắc 6 tháng liên tiếp',
                    '<b>Nhiệm Vụ Chính :</b>',
                    '- Tư vấn thủ tục chuyên ngành liên quan đến XNK các loại mặt hàng',
                    '- Xác định loại hình XNK, xác định HS code, ...',
                    '- Tư vấn các chính sách XNK cho từng mặt hàng',
                    '- Thực hiện khai báo Hải quan trên hệ thống ECUS5VNACCS.',
                    '- Theo dõi hiện trường để lấy lệnh giao hàng (DO), C/O, giấy kiểm tra chất lượng, thanh lý tờ khai, ...',
                    '- Lên kế hoạch đóng hàng xuất khẩu, giao hàng, lấy hàng tại sân bay,...',
                    '- Sắp xếp phương tiện vận tải chở hàng ra cảng và ngược lại.',
                   ]}, 
            {company: 'CB27 Engineering Co., Ltd', time: '6/2019 - 10/2021 ', 
              task :[ 
                'Thực tập sinh xuất nhập khẩu',
                     '<b>Nhiệm Vụ Chính :</b>',
                    '- Tìm kiếm nhà cung cấp trong và ngoài nước.',
                    '- Tìm kiếm, duy trì khách hàng trong và ngoài nước.',
                    '- Kiểm tra hợp đồng và lên kế hoạch mua hàng với nhà cung cấp.',
                    '- Gửi báo giá, hợp đồng với khách hàng.',
                    '- Chuẩn bị và kiểm tra bộ chứng từ XNK.',
                    '- Theo dõi các lô hàng xuất khẩu - nhập khẩu để hoàn tất việc nhận hàng và giao hàng cho khách.',
                      ]}],


    love: 'du lịch!',
    skill: [
      {title: 'Tin Học Văn Phòng' , icon:''},
      {key:'Excel' , value: 'Pivot table, VBA cơ bản',icon:'<i class="fas fa-file-excel excel"></i>'},
      {key:'SQL' , value: 'Query , CRUD cơ bản',icon:'<i class="fas fa-database sql" ></i>'},
      {key:'Microsoft Office' , value: 'Word, Powerpoint sử dụng thành thạo ',icon:'<i class="fab fa-microsoft microsoft" ></i>'},
      {key:'Adobe' , value: 'Adobe Acrobat Reader sử dụng thành thạo',icon:'<i class="fab fa-microsoft microsoft" ></i>'},
      {key:'Tiếng Anh' , value: 'Có khả năng đọc và hiểu tài liệu tiếng Anh',icon:''},
      {key:'Kỹ Năng Mềm' , value: 'Giải quyết vấn đề, làm việc nhóm, khả năng trình bày, chịu áp lực tốt ...',icon:''},
  ],
  objective:[
    {key:'Ngắn Hạn', value: [
    '- Áp dụng những kinh nghiệm trong lĩnh vực thương mại và logistic để trở thành nhân viên xuất sắc tại doanh nghiệp. ']},
    {key:'Dài Hạn', value: ['- Gắn bó lâu dài với công ty, trở thành nhân viên nòng cốt, tạo nhiều giá trị cho công ty.',
    '- Trở thành cấp quản lý, tham gia vào đội ngũ quản lý.',
    '- Sẵn sàng dẫn dắt, chia sẻ kiến thức, kinh nghiệm cho các thành viên nhằm hướng đến mục tiêu và hiệu quả cao nhất cho doanh nghiệp.']},
  ],

  objectiveSkill: [
      {title: 'Muốn Học Trong Năm 2022' , icon:''},
      {key:'NextJS' , value: 'Framework của React',icon:'<i class="fa-solid fa-n nextjs"></i>'},
      {key:'React Native' , value: 'Framework của React',icon:'<i class="fab fa-react react"></i>'},
      {key:'React Redux' , value: 'Library của React',icon:'<i class="fas fa-check-double redux"></i>'},
      {key:'SCSS, SASS' , value: 'Chương trình tiền xử lý CSS (CSS preprocessor).',icon:'<i class="fab fa-sass scss" ></i>'},
      {key:'MongoDB' , value: 'Quản lý Database',icon:'<i class="fas fa-database mongodb" ></i>'},
      {key:'Figma' , value: 'Thiết kế UI web',icon:'<i class="fa-brands fa-figma figma"></i>'},
  ],

  project :[

    {title: '30 Days Practice' , show:true , 
    link:'null',
    listImage:['./img/about/day1.png'
              ,'./img/about/day2.png'
              ,'./img/about/day3.png'
              ,'./img/about/day4.png'
              ,'./img/about/day5.png'
              ,'./img/about/day6.png'
              ,'./img/about/day7.png'
              ,'./img/about/day8.png',],
    leftDescription: ['Tạo HTML CSS từ design' ,'Responsive cho cả mobile và tablet',], 
    rightDescription: ['Style: CSS','Library ReactJS' ,'React Router V6' , 'Xử lý logics: JS, Hooks']}, 

    {title: 'TheBand - HTML/CSS' , show:true , 
    link:'https://v-dat.github.io/w3-theband',
    listImage:['./img/about/theband1.png','./img/about/theband2.png','./img/about/theband3.png','./img/about/theband4.png',],
    leftDescription: ['Tạo HTML CSS từ design' ,'Responsive cho cả mobile và tablet',], 
    rightDescription: ['Style: CSS' ,'Cấu trúc web: HTML'  , 'Xử lý logics: JS (rất ít)']}, 
  ],

},}


export default data;