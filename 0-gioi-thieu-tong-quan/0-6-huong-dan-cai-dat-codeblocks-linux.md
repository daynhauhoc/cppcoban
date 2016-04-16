---
title: Hướng dẫn cài đặt Code::blocks làm môi trường phát triển ứng dụng trên Ubuntu
---

Tiếp the trong chủ đề này, chúng ta sẽ cài đặt Code::block thiết lập môi trường lập trình ngôn ngữ C/C++ trên Ubuntu nhằm phục vụ việc học tập của các bạn chỉ có máy Linux mà cụ thể ở đây là Ubuntu.

## Giới thiệu Code::blocks
Code::Blocks là một Integrated Development Environment (IDE) tức là một môi trường tích hợp bao gồm nhiều công cụ khác nhau như chương trình viết mã lệnh hay code editor, chương trình sửa lỗi hay debugger, chương trình mô phỏng ứng dụng khi chạy thực tế hay simulator... hỗ trợ việc lập trình C/C++ trên nền tảng Linux, Những tính năng nổi bậc phải kể đến như:

* Các bộ compilers miễn phí
* Source formatter (dựa trên AStyle)
* Tạo C++ classes theo từng bước
* Code-completion / symbols-browser (Gợi ý Coding)
* Default MIME handler
* Tạo Code::Blocks plugins dễ dàng
* To-do list
* Autosave (cái này hữu ích với nhiều trường hợp nhất định)
* Rất nhẹ
* Code::blocks miễn phí

Và còn nhiều nữa, các bạn tự khám phá nhé.

> **Chú ý:** Ngoài Code::Blocks ra còn có các IDE khác hỗ trợ lập trình C/C++ trên Linux như Eclipse, QtCreator... hoặc chỉ cần lệnh bạn cũng có thể compile C/C++. Bạn có thể tìm hiểu thêm trên mạng.

## Cách cài đặt Code::blocks

Chúng ta có thể cài đặt Code::block bằng hai cách sau

### 1. Qua cửa sổ lệnh

Trong cách này, dành cho các bạn đã quá quen với cửa sổ lệnh trong linux, các bước vô cùng đơn giản, truy cập vào Terminal bằng cách dùng tổ hợp phím <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd> và nhập vào lần lượt các lệnh sau:

```bash
sudo apt-get update
sudo apt-get install codeblocks g++
```

### 2. Qua Ubuntu Software Center

Đầu tiên, chúng ta vào Dashboard của Ubuntu và tìm kiếm với từ khóa "**Ubuntu**" sẽ có một ứng dụng **Ubuntu Software Center**, ta chọn vào nó:

> **Chú ý** đối  với các bạn sử dụng Gnome thì nó chỉ là **Software Center** thôi nhé.

![](https://daynhauhoc.s3-ap-southeast-1.amazonaws.com/original/2X/b/b6725b02d224ec34cb675fa65d0d3a6bd3d5a435.png)

Bấm vào ô tìm kiếm ở phía trên và điền từ khóa "**Code::block**", sẽ hiện ngay kết quả, chọn nó:

![](https://daynhauhoc.s3-ap-southeast-1.amazonaws.com/original/2X/6/6ad457f09459ad1e3cec7210606a4621d6a66179.png)

Bấm vào **Install** để cài đặt:

![](https://daynhauhoc.s3-ap-southeast-1.amazonaws.com/original/2X/2/22d40b543c61bebad6f8e16125d0758d1531b281.png)

Trong lần đầu khởi động nó sẽ hiện lên bảng chọn Compiler và tất nhiên ta sẽ chọn **GNU GCC Compiler**, vì nó có sẵn mà:

![](https://daynhauhoc.s3-ap-southeast-1.amazonaws.com/original/2X/4/4fd487084db78125920b66cc5aed9d64f8a51912.png)

Cùng viết thử một chương trình hello world rồi cùng xem nó hoạt động không nào (bấm vào nút bánh răn màu vàng):

```cpp
#include <iostream>

int main()
{
  std::cout << "Hello World!";
}
```

![](https://daynhauhoc.s3-ap-southeast-1.amazonaws.com/original/2X/e/eab23541d994e5f659b9948b34f7ead3d13daaef.png)

Oops! Lỗi rồi, lạ nhĩ... nó thông báo rằng: `g++ not found` - rất dễ hiểu vì trong bộ GNU không phải các ngôn ngữ nào cũng cài sẵn (chỉ C mới có sẵn thôi), ta phải cài trình dịch C++ cho GNU (cách cài tương tự như trên):

![](https://daynhauhoc.s3-ap-southeast-1.amazonaws.com/original/2X/7/7af00dddf7874b1e492c7ff4686649617e0567b6.png)

Xong bây giờ ta quay lại build thử xem nào:

![](https://daynhauhoc.s3-ap-southeast-1.amazonaws.com/original/2X/8/8e6e34fd043fba32e1bac3e1095e492f05f54394.png)

Okie, Ngon lành rồi, bây giờ cùng run (nút play màu xanh) thử nè:

![](https://daynhauhoc.s3-ap-southeast-1.amazonaws.com/original/2X/6/68fb6a22ed965dfe9e91ca964de186dca842006d.png)

Hoạt động tốt nhé :)

Như vậy ta đã hoàn thành việc cài đặt IDE Code::blocks trên Ubuntu để chuẩn bị cho các bài học sau này.
Hẹn các bạn vào những bài học thú vị tiếp theo nhé !
