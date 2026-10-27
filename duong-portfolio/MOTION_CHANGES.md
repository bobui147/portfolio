# Tích hợp Motion for React

Trước khi cài đặt, `package.json` không có React: dự án dùng HTML/CSS/JavaScript thuần. Phần render đã được chuyển sang React để dùng đúng `motion/react`, đồng thời giữ nguyên nội dung, cấu trúc HTML, SVG, các liên kết, responsive và dark/light mode.

Đã kiểm tra và cài phiên bản tương thích từ npm: React / React DOM **19.3.1**, Motion **14.7.0**, Vite **8.3.5**. Thư viện Motion khai báo hỗ trợ React 18 và 19; tài liệu yêu cầu React từ 18.2.

## File ứng dụng được thêm hoặc sửa

- `package.json`: thêm React, React DOM, Motion và công cụ build/kiểm tra; cập nhật lệnh `check`, thêm `preview`.
- `package-lock.json`: khóa phiên bản các dependency để cài lại nhất quán bằng `npm ci`.
- `vite.config.js`: cấu hình Vite + React, địa chỉ dev, thư mục build `dist`, đường dẫn tài nguyên tương đối.
- `src/index.html`: giữ metadata và đọc theme sớm; thêm React root và entry `main.jsx`.
- `src/main.jsx`: khởi tạo React StrictMode và `MotionConfig reducedMotion="user"`, import CSS.
- `src/App.jsx`: chuyển theme, menu, sao chép email và form sang React state/effects với cleanup; giữ section tracking.
- `src/components/Navigation.jsx`: chuyển nguyên thanh điều hướng và drawer sang JSX, nối sự kiện và trạng thái React.
- `src/components/PortfolioContent.jsx`: chuyển nguyên nội dung CV, section, project, SVG và footer sang JSX; gắn các wrapper hiệu ứng mà không thêm thẻ bọc vào bố cục.
- `src/components/Reveal.jsx`: `Reveal` và `ProjectCard` dùng `whileInView`, `viewport.once`, delay 90ms giữa các card và `whileHover` nâng 4px. Dùng `useReducedMotion` cùng đăng ký media query để hỗ trợ cả thay đổi tùy chọn khi trang đang mở. Focus bàn phím làm nội dung hiện ngay.
- `src/styles.css`: bỏ fade/slide và chuyển động card cũ để tránh xung đột với Motion; giữ nguyên bố cục, font, màu, breakpoint, smooth scrolling và các tương tác CSS nhỏ. Thêm fallback giảm chuyển động cho phần tử Motion.

## File build, kiểm tra và hướng dẫn

- `scripts/serve.mjs`: chạy Vite để biên dịch JSX và hỗ trợ cập nhật khi phát triển.
- `scripts/build.mjs`: build bằng Vite; kiểm tra vị trí output trước khi build; chép nguyên CV và giấy phép template vào `dist`.
- `scripts/check.mjs`: render các React component, kiểm tra ID, section, link, asset, CV; đối chiếu văn bản/link/SVG với bản trước chuyển đổi khi snapshot còn tồn tại.
- `scripts/check-client.mjs`: chạy React và Motion thật trong JSDOM để kiểm tra reveal một lần, thứ tự card, hover, touch, reduced motion, theme, menu, copy email và form. Dùng cache riêng để tránh ảnh hưởng server dev đang chạy.
- `README.md`: cập nhật cách cài/chạy/build, cấu trúc React và giới hạn của kiểm tra DOM mô phỏng.
- `MOTION_CHANGES.md`: danh sách file và giải thích thay đổi này.

## File đã xóa

- `src/main.js`: thay bằng React entry `src/main.jsx` và logic trong `src/App.jsx`.
- `src/motion.js`: bỏ hệ thống reveal IntersectionObserver/CSS cũ; Motion for React đảm nhiệm hiệu ứng.

## Ngữ cảnh thiết kế local được cập nhật

- `.superdesign/capture-context.mjs`: ghi nhận đúng các component và dependency React mới.
- `.superdesign/design-system.md`: mô tả cách dùng Motion, thời lượng và giảm chuyển động trong UI hiện tại.
- `.superdesign/init/components.md`: source và mô tả các component mới.
- `.superdesign/init/layouts.md`: source React entry, App và Navigation.
- `.superdesign/init/routes.md`: entry Vite/React và các anchor hiện có.
- `.superdesign/init/theme.md`: CSS hiện tại và vai trò của Motion.
- `.superdesign/init/pages.md`: cây dependency React mới.
- `.superdesign/init/extractable-components.md`: danh sách component có thể tái sử dụng.

Thư mục ignored `.superdesign/tmp/` chỉ chứa snapshot trước chuyển đổi và cache kiểm tra local. Asset, PDF, `src/navigation.js` và cấu hình hosting hiện có được giữ nguyên.

## Kiểm tra

Chạy `npm run check`, `npm run build`, `npm run dev`. Các bài kiểm tra chạy thư viện React/Motion thật trong DOM mô phỏng; chúng không thay thế kiểm tra bố cục hoặc hoạt ảnh trong trình duyệt thật.

Tài liệu tham khảo: [Motion for React](https://motion.dev/docs/react), [scroll animation](https://motion.dev/docs/react-scroll-animations), [reduced motion](https://motion.dev/docs/react-use-reduced-motion).
