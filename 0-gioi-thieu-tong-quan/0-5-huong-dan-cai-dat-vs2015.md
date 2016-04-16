   ﻿// 0.5 Hướng dẫn cài đặt visual studio 2015 làm môi trường phát triển ứng dụng
Trong chủ đề này, Chúng ta sẽ cùng nhau cài đặt IDE Visual studio 2015 để phục vụ việc học tập sao cho thực sự hiệu quả.
   //Trước hết Giới thiệu sơ qua về Visual Studio 
Đầu tiên, chúng ta sẽ ghé thăm trang chủ của visual studio do ông trùm Microsoft nắm quyền.
   // Thông tin thêm Xamarin đã được microsoft mua lại và phát hành miễn phí cho người dùng. Hiện tại thì với Vs có thể phát triển được nhiều nền tảng (android và ios winphone )//
   - https://www.visualstudio.com/en-us/downloads/download-visual-studio-vs.aspx#
Tại đây có nhiều sự lựa chọn cho bạn : 
   -  Visual studio Community 2015. Bản này là bản miễn phí với các tính năng cơ bản như sau : 
   ***Trích : "A rich, integrated development environment for creating stunning applications for Windows, Android, and iOS, as well as modern web applications and cloud services"
 - Visual Studio Enterprise 2015 : Bản này chúng ta được phép dùng thử và khi hết thời hạn dùng thử thì tất nhiên bạn sẽ phải trả tiền để tiếp tục sử dụng nó :D Với các tính năng được giới thiệu như sau : 
    ***Trích :  "Enterprise-grade solution with advanced capabilities for teams working on projects of any size or complexity, including advanced testing and DevOps."
 - Visual Studio Code : Bản này tiếp tục là một bản miễn phí nữa của Microsoft. 
   *** Trích : Code editing redefined. Build and debug modern web and cloud applications. Code is free and available on your favorite platform — Windows, Mac OS X, or Linux.
 Với bản này chúng ta có thể cài đặt trên nền tảng Mac, Linux.
===================================================
   //Tiếp theo Lựa chọn phiên bản cài đặt. 
Mình khuyên mọi người nên cài đặt bản Visual studio Community 2015.  - Vì nó hỗ trợ đầy đủ tính năng cho chúng ta trong việc học lập trình.
 - Và nó miễn phí với mọi người. Sẽ không còn phải lo lắng về vấn đề bản quyền.
Nếu bạn muốn trải nghiệm với  Visual Studio Enterprise 2015 thì sẽ bỏ ra một khoản chi phí để mua bản quyền nhé :D
Dưới đây là link ảnh về chi phí cho Vs : 
(Hình 0.5.1)
===================================================
   
   //Tiến hành tải bản cài đặt của  Visual studio Community 2015 
   // Lưu ý nhỏ trước khi cài đặt bạn cần lưu ý với phiên bản VS Community 2015 nên có Microsoft .NET Framework 4.6.1.
Nên update Framework trước khi cài đặt. Để tránh xảy ra lỗi đáng tiếc.
Truy cập link sau để thực hiện việc update  Framework: 
 - https://www.microsoft.com/en-us/download/details.aspx?id=48130
   // Tải phiên bản cài đặt 
 Link tải phiên bản cài đặt Visual studio Community 2015  (206,63 Kb)
Sau khi tải xong, Chúng ta mở thư mục chứa file cài đặt có tên  : 
   - vs_community_ENU.exe
Thực hiện các thao tác cài đặt như thường lệ :D
(Hình 0.5.2)
  - Sau đó sẽ hiện một cửa sổ thông báo nơi cài đặt và kiểu cài đặt
  - Kiểu cài đặt có 2 kiểu  : 
      + Default : sẽ cài C#/Vb và tính năng với desktop
      + Custom  : người dùng sẽ tùy chọn tính năng muốn cài đặt (Hình 0.5.3)
Khuyên nên chọn kiểu Custom và tick các tùy chọn theo nhu cầu sử dụng
Khi đã chọn xong thì chúng ta nhấp Next và chờ đợi . . .
Sau khi công việc cài đặt đã hoàn tất. Chúng ra reset máy để xem thành quả như thế nào :D
 Đầu tiên, Visual studio yêu cầu đăng nhập với tài khoản Microsoft hoặc không đăng nhập.
 Việc đăng nhập có lợi thế là sẽ đồng bộ hóa lại những cài đặt trên visual studio
 Tiếp theo là việc lựa chọn theme (Hình 0.5.6)
 Việc khởi động cho lần đầu tiên sử dụng sẽ mất chút thời gian tùy theo việc cài đặt ở phần Custom 
 (Hinh 0.5.7)
 // HƯỚNG DẪN TẠO PROJECT TRONG Visual studio 2015
      - Trong giao diện của VS chọn File -> New -> Project ( Có thể sử dụng phím tắt Ctr+Shift+N) (Hình.5.8)
      - Sẽ có một cửa sổ New Project xuất hiện
		(Hình 0.5.9)
	 + Tìm tới phần Visual C++ -> Chọn General -> Empty Project.
	 + Bên dưới là phần đặt tên của project và nơi lưu project.
	* Ở phần Name thì các bạn có thể đặt có dấu

	* Phần Location thì khuyên là nên tạo riêng từng mục một 
	  và đặt ở phần ổ cứng khác với ổ C(Với các bạn sử dụng Window)
 	  để tránh việc mất các project quan trọng đã là đã làm

	* Phần Solution name :  Không nên đặt tên có dấu hoặc kí tự như dấu cách		
	 Khi file được chuyển sang các máy khác có thể không hoạt động
		

 	Đây là hình ảnh sau khi bạn đã tạo một project mới (Hình 0.5.10)

	//Có 2 phần các bạn cần để ý là phần : 
 	  + Solution Explorer : Tại đây có chứa các mục quan trọng các bạn cần để ý 
		 Header File / Source File 
            Nếu sau khi tạo xong project mà phần Solution Explorer chưa xuất hiện các bạn có thể
		click vào View -> Solution Explorer (Ctr+Alt+L)
	  + Error List : Tại đây có chứa các lỗi cú pháp gặp phải khi chạy chương trình.
                      Mở Error List : Click View -> Error List
	//	 TẠO FILE CPP ĐỂ THỰC HIỆN CHƯƠNG TRÌNH
    	 Click chuột phải vào Source File -> Add -> New Item (Ctr+Shift+A)  
           (Hình 0.5.11)
	Một cửa sổ mới sẽ được tạo (Hình 0.5.12)
        Chọn C++ File(.cpp) Chưa cần để ý tới phần Header File(.h) vội nha !
        Đặt tên cho File mới (.cpp)
 	// Như vậy là đã xong phần cài đặt Visual Stuido 2015 và Hướng dẫn tạo project mới. Hẹn Gặp lại các bạn vào buổi tới với nhiều điều thú vị hơn nữa nhé :D
	




                                      


	  


     



  
