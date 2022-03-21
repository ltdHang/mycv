const data = { 
  about: {
    name: 'Lê Thị Diệu Hằng',
    dayOfBirth: '13/08/1998',
    description: '',
    tdtu_icon: './img/about/ueh_icon.jpg',
    github: 'https://github.com/ltdHang',
    avatar:'./img/about/avatar.png',
    age:24,
    email: 'lethidieuhang1308@gmail.com',
    phone: '0326 976 777',
    location: 'TP HCM',
    education: [ {school: 'Đại Học Kinh Tế TP. HCM', time: '2016 - 2020', gpa: 'GPA: 8.05/10',major: 'Kinh Doanh Thương Mại'}, ],
    ceritficate: ['2020 : Chứng chỉ nghiệp vụ khai báo Hải quan', 
                  '2019 : Chứng chỉ xuất nhập khẩu - Lê Ánh',
                  '2020 : Toeic'],
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
            {company: 'CB27 Engineering Co., Ltd', time: '6/2019 - 10/2019 ', 
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
      {key:'Excel' , value: 'Pivot table, VBA cơ bản',icon:'<i class="fas fa-file-excel excel"></i>',show:'yes'},
      {key:'SQL' , value: 'Query , CRUD cơ bản',icon:'<i class="fas fa-database sql" ></i>',show:'yes'},
      {key:'Adobe' , value: 'Adobe Acrobat Reader sử dụng thành thạo',icon:'<i class="fab fa-adobe adobe" ></i>'},
      {key:'Tiếng Anh' , value: 'Khả năng đọc viết tốt, giao tiếp khá',icon:'',show:'yes'},
      {key:'Microsoft Office' , value: 'Word, Powerpoint sử dụng thành thạo ',icon:'<i class="fab fa-microsoft microsoft" ></i>',show:'yes'},
      {key:'Kỹ Năng Mềm' , value: 'Giải quyết vấn đề, làm việc nhóm, khả năng trình bày, chịu áp lực tốt ...',icon:'',show:'yes'},
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
      {key:'Nâng cao nghiệp vụ xuất nhập khẩu' , value: 'Framework của React',icon:'<i class="fa-solid fa-ship boat"></i>'},
      {key:'Tiếng Anh: Cải thiện giao tiếp' , value: 'Framework của React',icon:'<i class="fa-solid fa-book book"></i>'},
      {key:'SQL: Sử dụng thành thạo' , value: 'Sử dụng thành thạo',icon:'<i class="fa-solid fa-database sql"></i>'},
      {key:'Power Bi: Sử dụng thành thạo' , value: '.',icon:'<i class="fa-solid fa-chart-line power-bi"></i>'},
  ],

  project :[

    {title: 'Bằng Cấp Và Chứng Chỉ' , show:true , 
    link:'null',
    listImage:['./img/about/1.png'
              ,'./img/about/2.png'
              ,'./img/about/3.png'
              ,'./img/about/4.png'],


              // listImage:[{key: './img/about/1.png', value: 'Bằng Cử Nhân Đại Học Kinh Tế HCM'},
              // {key: './img/about/2.png', value: 'Chứng chỉ tin học quốc tế IC3 '},
              // {key: './img/about/3.png', value: 'Chứng chỉ xuất nhập khẩu thực tế - Trung Tâm Lê Ánh'},
              // {key: './img/about/4.png', value: 'Chứng tử nghiệp vụ khai báo hải quan điện tử '},],
    descriptionListImage: ['Tạo HTML CSS từ design' ,'Responsive cho cả mobile và tablet',], 
    rightDescription: ['Style: CSS','Library ReactJS' ,'React Router V6' , 'Xử lý logics: JS, Hooks']}, 

    {title: 'TheBand - HTML/CSS' , show:true , 
    link:'https://v-dat.github.io/w3-theband',
    listImage:['./img/about/theband1.png','./img/about/theband2.png','./img/about/theband3.png','./img/about/theband4.png',],
    leftDescription: ['Tạo HTML CSS từ design' ,'Responsive cho cả mobile và tablet',], 
    rightDescription: ['Style: CSS' ,'Cấu trúc web: HTML'  , 'Xử lý logics: JS (rất ít)']}, 
  ],

},}


export default data;