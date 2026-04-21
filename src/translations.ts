export type Language = 'ko' | 'en' | 'ja' | 'vi';

export const translations = {
  ko: {
    nav: {
      about: "협회소개",
      vision: "비전 및 미션",
      services: "주요사업",
      projects: "수행과제",
      organization: "조직도",
      contact: "문의하기",
      mobileMenu: "메뉴",
      contactUs: "프로젝트 문의하기",
      admin: "관리자"
    },
    hero: {
      badge: "2025년 4월 공식 출범 • 상생의 새로운 이정표",
      title1: "정부·공공 과제의",
      title2: "든든한 네트워킹 중심축",
      desc: "단독으로 수행하기 벅찬 대형 국가 과제와 기업 프로젝트. 디지털산업혁신협회가 기업과 대학을 연결하여 최적의 컨소시엄을 구성하고, 성공을 위한 교육 및 컨설팅을 지원합니다.",
      btnPrimary: "협회 주요사업 보기",
      btnSecondary: "설립 배경 알아보기"
    },
    about: {
      title: "왜 디지털산업혁신협회인가?",
      card1Title: "복잡해지는 정부/공공 과제 진입 장벽",
      card1Desc: "수많은 기업과 대학이 공공기관 및 대형 기업의 프로젝트에 참여하고자 하지만, 독자적인 기술력만으로는 네트워크 부족과 컨소시엄 구성에 어려움을 겪어 수주에 실패하는 경우가 많습니다.",
      card2Title: "최적의 파트너 매칭과 실무 지원의 부재",
      card2Desc: "단순한 정보 제공을 넘어, 저희 협회는 회원사 간 매칭을 주도하고 실질적인 컨소시엄을 구성합니다. 또한 과제 수행에 절실히 요구되는 실무 중심 교육과 전문 컨설팅을 직접 지원하여 완벽한 프로젝트 수행을 돕습니다."
    },
    vision: {
      tag: "Vision & Mission",
      title1: "최상의 프로젝트 컨소시엄을 구축하는",
      title2: "매칭 & 교육 플랫폼",
      items: [
        { title: '정부·공공 과제 매칭', desc: '기업·대학 간 최적의 산학연 컨소시엄 조율' },
        { title: '과제 맞춤형 컨설팅', desc: '수주부터 수행까지 전주기 전략 지원' },
        { title: '실무 역량 교육', desc: '과제 수행에 필수적인 최신 기술 체득' },
        { title: '상생 네트워크', desc: '회원사 간의 지속 가능한 협력 체계 강화' },
      ]
    },
    services: {
      title: "주요 사업 영역",
      desc: "회원사들이 정부 및 대형 기업 과제를 성공적으로 수주/완수할 수 있도록 종합 지원망을 가동합니다.",
      card1Tag: "Matching",
      card1Title: "정부/공공/기업 과제 매칭 & 컨소시엄 구성",
      card1Desc: "회원사의 역량과 비즈니스 목표를 분석하여 다수의 기업 및 대학이 함께 참여할 수 있는 시너지 높은 컨소시엄을 구성합니다.",
      card2Title: "과제 맞춤형 컨설팅",
      card2Desc: "제안서 작성부터 사업 계획 수립, 평가 대응 등 프로젝트 수주 확률을 극대화하는 전문 컨설팅을 제공합니다.",
      card3Title: "프로젝트 연계 실무 교육",
      card3Desc: "성공적인 과제 수행을 위해 임직원에게 요구되는 최신 기술 및 실무형 역량 강화 교육을 진행합니다.",
      card4Title: "산학연 거버넌스 네트워킹",
      card4Desc: "정부, 공공기관, 학교, 기업 간의 만남을 주선하여 신규 과제를 발굴하고 정책 제안을 이끄는 허브 역할을 수행합니다."
    },
    organization: {
      title: "조직 체계",
      desc: "과제 수주와 완벽한 수행 지원을 위한 5개 본부 체제로 운영됩니다.",
      depts: [
        { name: '운영지원본부', desc: '협회 운영 총괄 및 지속가능한 회원사 지원 체계 관리' },
        { name: '매칭지원본부', desc: '발주처 과제 분석 및 회원사 간 컨소시엄 구성/조율' },
        { name: '컨설팅본부', desc: '프로젝트 제안/수행 전략 수립 및 평가 대응 맞춤형 컨설팅 지원' },
        { name: '교육개발본부', desc: '과제 수행 필요 역량 중심의 현장 맞춤형 온/오프라인 교육 운영' },
        { name: '대외협력본부', desc: '발주기관(정부/학교/공공기관) 네트워크 구축 및 정책 소통 채널 확보' }
      ]
    },
    projects: {
      title: "주요 수행 과제",
      desc: "디지털산업혁신협회와 함께 성공적으로 수행된 프로젝트 및 네트워크 현황입니다.",
      empty: "등록된 수행 과제가 없습니다.",
      btnAdmin: "관리자 화면 들어가기",
      items: [
        {
          id: "1",
          title: "디지털산업혁신협회 첫 시범 사업",
          client: "디지털 혁신 추진단",
          year: "2025",
          description: "디지털 혁신 생태계를 구축하기 위한 초기 컨소시엄 구성 및 플랫폼 구축 사업입니다. 다양한 회원사들이 참여하여 테스트베드를 운영합니다."
        }
      ]
    },
    admin: {
      title: "관리자 - 과제 관리",
      list: "수행 과제 목록",
      add: "주요 수행 과제 추가",
      formTitle: "프로젝트 명",
      formClient: "발주처",
      formDate: "수행 연도 (예: 2025)",
      formDesc: "설명",
      submit: "등록 및 저장",
      submitting: "저장중...",
      cancel: "취소",
      delete: "삭제",
      back: "홈으로 돌아가기"
    },
    contact: {
      title: "프로젝트 문의",
      desc1: "정부 제안, 프로젝트 컨소시엄 구성, 도움이 필요하신가요?",
      desc2: "원하시는 과제나 협업 모델에 대한 문의를 남겨주시면, 최적의 매칭 가이드를 제공합니다.",
      officeTitle: "Office",
      address: "경기도 화성시 동탄대로 636-14",
      successTitle: "성공적으로 접수되었습니다!",
      successDesc: "빠른 시일 내에 기재해주신 연락처로 회신드리겠습니다.",
      btnNew: "새로운 문의 작성하기",
      labelName: "이름 / 직급",
      plName: "홍길동 과장",
      labelCompany: "소속명 (기업/대학/기관)",
      plCompany: "소속 입력",
      labelEmail: "이메일",
      plEmail: "email@company.com",
      labelMessage: "문의 내용",
      plMessage: "궁금하신 점이나 참여 희망 분야를 남겨주세요",
      btnSubmit: "문의 접수하기",
      btnSubmitting: "전송 중..."
    },
    footer: {
      title: "디지털산업혁신협회",
      desc: "기업과 대학을 넘어 최적의 파트너들이 모이는 정부·공공 과제의 비즈니스 허브",
      contact: "Contact",
      links: "Links",
      copyright: "© 2025 디지털산업혁신협회 (가칭). All rights reserved.",
      badge: "과기부 산하 비영리 민간 협회 추진중"
    }
  },
  en: {
    nav: {
      about: "About",
      vision: "Vision & Mission",
      services: "Services",
      projects: "Projects",
      organization: "Organization",
      contact: "Contact",
      mobileMenu: "Menu",
      contactUs: "Project Inquiry",
      admin: "Admin"
    },
    hero: {
      badge: "Official Launch April 2025 • A New Milestone for Co-prosperity",
      title1: "A Reliable Networking Hub",
      title2: "for Government & Public Projects",
      desc: "Handling large-scale national tasks alone is tough. We connect companies and universities to form optimal consortiums and provide the education and consulting needed to succeed.",
      btnPrimary: "View Core Services",
      btnSecondary: "Discover Background"
    },
    about: {
      title: "Why Digital Industry Innovation Association?",
      card1Title: "High Barriers to Gov/Public Projects",
      card1Desc: "Many companies and universities aim to participate in large public projects, but fail due to a lack of network and inability to form competitive consortiums on their own.",
      card2Title: "Lack of Optimal Partnering & Practical Support",
      card2Desc: "Beyond merely sharing information, we actively match members to form real consortiums. Furthermore, we directly support practical education and specialized consulting required for flawless execution."
    },
    vision: {
      tag: "Vision & Mission",
      title1: "Matching & Education Platform",
      title2: "Creating the best project consortiums",
      items: [
        { title: 'Project Matching', desc: 'Networking synergistic consortiums' },
        { title: 'Custom Consulting', desc: 'Full-cycle strategic support from bidding' },
        { title: 'Practical Education', desc: 'Mastering tech essential for execution' },
        { title: 'Co-prosperity Network', desc: 'Strengthening sustainable partnerships' },
      ]
    },
    services: {
      title: "Core Service Areas",
      desc: "Running a comprehensive support network to help members win and complete major government and corporate projects.",
      card1Tag: "Matching",
      card1Title: "Project Matching & Consortium Formation",
      card1Desc: "We analyze members' capabilities to assemble highly synergistic consortiums embracing multiple companies and universities.",
      card2Title: "Customized Task Consulting",
      card2Desc: "We offer expert consulting maximizing project win-rate, covering proposal writing, business planning, and evaluation responses.",
      card3Title: "Project-Linked Practical Education",
      card3Desc: "We conduct hands-on competency training on the latest tech required for members' staff to succeed in their tasks.",
      card4Title: "Industry-Academic Governance",
      card4Desc: "Acting as a hub that leads policy proposals and discovers new projects through dynamic interaction among government, schools, and enterprises."
    },
    organization: {
      title: "Organization Structure",
      desc: "Operated by 5 divisions to support project winning and flawless execution.",
      depts: [
        { name: 'Operations Support', desc: 'General management & sustainable member support' },
        { name: 'Matching Support', desc: 'Client task analysis & consortium formation' },
        { name: 'Consulting', desc: 'Proposal/execution strategy & custom consulting' },
        { name: 'Education Dev.', desc: 'Field-customized training based on required competencies' },
        { name: 'External Relations', desc: 'Network building with clients (gov/schools) & policy channels' }
      ]
    },
    projects: {
      title: "Completed Projects",
      desc: "A track record of successful projects and partnerships led by our association.",
      empty: "No projects registered yet.",
      btnAdmin: "Enter Admin Screen",
      items: [
        {
          id: "1",
          title: "Digital Industry Innovation Association First Pilot Project",
          client: "Digital Innovation Task Force",
          year: "2025",
          description: "This is an initial consortium building and platform development project to establish a digital innovation ecosystem. Various member companies participate to operate an innovative testbed."
        }
      ]
    },
    admin: {
      title: "Admin - Manage Projects",
      list: "Project List",
      add: "Add New Project",
      formTitle: "Project Name",
      formClient: "Client / Funder",
      formDate: "Year (e.g., 2025)",
      formDesc: "Description",
      submit: "Save Project",
      submitting: "Saving...",
      cancel: "Cancel",
      delete: "Delete",
      back: "Back to Home"
    },
    contact: {
      title: "Project Inquiry",
      desc1: "Need help with gov proposals or consortium forming?",
      desc2: "Leave your inquiry and we will provide the optimal matching guide.",
      officeTitle: "Office",
      address: "636-14 Dongtan-daero, Hwaseong-si, Gyeonggi-do",
      successTitle: "Successfully Submitted!",
      successDesc: "We will reply shortly to the contact information provided.",
      btnNew: "Write a New Inquiry",
      labelName: "Name / Title",
      plName: "John Doe, Manager",
      labelCompany: "Organization",
      plCompany: "Company / Univ Name",
      labelEmail: "Email",
      plEmail: "email@company.com",
      labelMessage: "Inquiry Details",
      plMessage: "Please share your questions or areas of interest",
      btnSubmit: "Submit",
      btnSubmitting: "Submitting..."
    },
    footer: {
      title: "Digital Industry Innovation Association",
      desc: "A business hub where top partners gather for government and public projects.",
      contact: "Contact",
      links: "Links",
      copyright: "© 2025 Digital Industry Innovation Association. All rights reserved.",
      badge: "Propelling as MSIT non-profit"
    }
  },
  ja: {
    nav: {
      about: "協会紹介",
      vision: "ビジョンと使命",
      services: "主要事業",
      projects: "遂行プロジェクト",
      organization: "組織図",
      contact: "お問い合わせ",
      mobileMenu: "メニュー",
      contactUs: "お問い合わせ",
      admin: "管理者"
    },
    hero: {
      badge: "2025年4月公式発足 • 共生の新しい道標",
      title1: "政府・公共プロジェクトの",
      title2: "強力なネットワーキング軸",
      desc: "単独では困難な大型国家課題と企業プロジェクト。当協会が企業と大学を連携させ、最適なコンソーシアムを構成し、成功のための教育やコンサルティングを支援します。",
      btnPrimary: "主要事業を見る",
      btnSecondary: "設立背景を知る"
    },
    about: {
      title: "なぜ当協会なのか？",
      card1Title: "複雑化する政府/公共課題の参入障壁",
      card1Desc: "多くの企業や大学が大規模プロジェクトへの参加を目指していますが、単独の技術力だけではネットワーク不足によりコンソーシアムの構築に苦戦し、受注に失敗するケースが多いです。",
      card2Title: "最適なマッチングと実務支援の不在",
      card2Desc: "単なる情報提供を超え、当協会は会員間のマッチングを主導し、実質的なコンソーシアムを構成します。また、プロジェクト完遂に不可欠な実務教育や専門コンサルティングを直接支援します。"
    },
    vision: {
      tag: "Vision & Mission",
      title1: "最高のコンソーシアムを構築する",
      title2: "マッチング・教育プラットフォーム",
      items: [
        { title: 'プロジェクトマッチング', desc: '産学研の最適コンソーシアム調整' },
        { title: 'カスタムコンサルティング', desc: '受注から遂行までの全周期支援' },
        { title: '実務能力教育', desc: 'プロジェクトに必要な最新技術の習得' },
        { title: '共生ネットワーク', desc: '会員社間の持続可能な協力体系強化' },
      ]
    },
    services: {
      title: "主要事業領域",
      desc: "会員が政府・大企業プロジェクトを受注し、完遂するための総合支援網を稼働します。",
      card1Tag: "Matching",
      card1Title: "プロジェクトマッチングとコンソーシアム構成",
      card1Desc: "会員の能力と目標を分析し、多数の企業や大学が参加できるシナジーの高いコンソーシアムを構成します。",
      card2Title: "課題特化型コンサルティング",
      card2Desc: "提案書の作成から事業計画の立案、評価対応まで、受注確率を最大化する専門コンサルティングを提供します。",
      card3Title: "プロジェクト連動型実務教育",
      card3Desc: "プロジェクトの成功に必要な最新技術と実務能力強化のための教育を実施します。",
      card4Title: "産学研ガバナンスネットワーク",
      card4Desc: "政府、公共機関、学校、企業間の交流を促進し、新規課題の発掘と政策提案を牽引するハブの役割を果たします。"
    },
    organization: {
      title: "組織体制",
      desc: "プロジェクト受注と完遂支援のための5本部体制で運営されています。",
      depts: [
        { name: '運営支援本部', desc: '運営統括および持続可能な会員支援体系の管理' },
        { name: 'マッチング支援本部', desc: '発注元の課題分析および会員間のコンソーシアム構成・調整' },
        { name: 'コンサルティング本部', desc: '提案・遂行戦略の立案および評価対応の支援' },
        { name: '教育開発本部', desc: '遂行能力に特化した現場密着型オン/オフライン教育の運営' },
        { name: '対外協力本部', desc: '発注機関ネットワーク構築および政策コミュニケーション' }
      ]
    },
    projects: {
      title: "主要遂行プロジェクト",
      desc: "デジタル産業革新協会と共に成功裏に遂行されたプロジェクトの実績です。",
      empty: "登録されたプロジェクトはありません。",
      btnAdmin: "管理者画面に入る",
      items: [
        {
          id: "1",
          title: "デジタル産業革新協会 初の試行事業",
          client: "デジタル革新推進団",
          year: "2025",
          description: "デジタル革新エコシステムを構築するための初期コンソーシアム構成およびプラットフォーム構築事業です。多様な会員社が参加してテストベッドを運営します。"
        }
      ]
    },
    admin: {
      title: "管理者 - プロジェクト管理",
      list: "プロジェクト一覧",
      add: "新規プロジェクト登録",
      formTitle: "プロジェクト名",
      formClient: "発注元",
      formDate: "遂行年 (例: 2025)",
      formDesc: "説明",
      submit: "保存",
      submitting: "保存中...",
      cancel: "キャンセル",
      delete: "削除",
      back: "ホームに戻る"
    },
    contact: {
      title: "プロジェクトのお問い合わせ",
      desc1: "政府の提案やコンソーシアム構成にお困りですか？",
      desc2: "ご希望の課題や協業モデルについてお問い合わせいただければ、最適なマッチングガイドを提供いたします。",
      officeTitle: "Office",
      address: "京畿道 華城市 東灘大路 636-14",
      successTitle: "送信が完了しました！",
      successDesc: "速やかにお返事させていただきます。",
      btnNew: "新しいお問い合わせを作成する",
      labelName: "お名前 / 役職",
      plName: "山田 太郎 マネージャー",
      labelCompany: "所属名（企業/機関）",
      plCompany: "企業/大学名",
      labelEmail: "Eメール",
      plEmail: "email@company.com",
      labelMessage: "お問い合わせ内容",
      plMessage: "ご希望の参加分野などをご記入ください",
      btnSubmit: "お問い合わせを残す",
      btnSubmitting: "送信中..."
    },
    footer: {
      title: "デジタル産業革新協会",
      desc: "企業と大学を越え、最適なパートナーが集う政府・公共プロジェクトのビジネスハブ",
      contact: "Contact",
      links: "Links",
      copyright: "© 2025 デジタル産業革新協会 (仮). All rights reserved.",
      badge: "科学技術情報通信部傘下 非営利民間協会 推進中"
    }
  },
  vi: {
    nav: {
      about: "Giới thiệu",
      vision: "Tầm nhìn & Sứ mệnh",
      services: "Dịch vụ chính",
      projects: "Dự án",
      organization: "Tổ chức",
      contact: "Liên hệ",
      mobileMenu: "Chỉ mục",
      contactUs: "Yêu cầu dự án",
      admin: "Quản trị viên"
    },
    hero: {
      badge: "Ra mắt chính thức vào tháng 4/2025 • Cột mốc hợp tác",
      title1: "Trung tâm Kết nối Dự án",
      title2: "Chính phủ & Doanh nghiệp",
      desc: "Xử lý các dự án quốc gia quy mô lớn một mình rất khó khăn. Chúng tôi kết nối doanh nghiệp và trường ĐH để lập liên doanh tối ưu, kèm đào tạo và tư vấn chuyên môn.",
      btnPrimary: "Xem Dịch vụ",
      btnSecondary: "Tìm hiểu Bối cảnh"
    },
    about: {
      title: "Tại sao lại chọn Hiệp hội Đổi mới Công nghiệp Kỹ thuật số?",
      card1Title: "Rào cản lớn với các dự án Chính phủ/Công cộng",
      card1Desc: "Nhiều doanh nghiệp, trường ĐH muốn tham gia các dự án công lớn, nhưng gặp khó do thiếu mạng lưới và không tự xây dựng được liên danh cạnh tranh.",
      card2Title: "Thiếu đối tác tối ưu và hỗ trợ thực tiễn",
      card2Desc: "Không chỉ cung cấp thông tin, chúng tôi chủ động kết nối để tạo nên liên doanh thực chất, hỗ trợ đào tạo thực tiễn và tư vấn để dự án thành công hoàn hảo."
    },
    vision: {
      tag: "Vision & Mission",
      title1: "Nền tảng Kết nối & Đào tạo",
      title2: "Tạo liên doanh dự án tốt nhất",
      items: [
        { title: 'Kết nối dự án', desc: 'Tạo liên doanh mang tính hiệp đồng' },
        { title: 'Tư vấn tùy chỉnh', desc: 'Hỗ trợ chu kỳ đầy đủ từ khi đấu thầu' },
        { title: 'Đào tạo thực tiễn', desc: 'Trang bị công nghệ cần thiết để triển khai' },
        { title: 'Mạng lưới đồng hành', desc: 'Củng cố hệ thống hợp tác bền vững' },
      ]
    },
    services: {
      title: "Lĩnh vực Dịch vụ Cốt lõi",
      desc: "Vận hành hệ thống hỗ trợ toàn diện để các thành viên trúng thầu dự án chính phủ và doanh nghiệp lớn.",
      card1Tag: "Matching",
      card1Title: "Kết nối Dự án & Lập Liên doanh",
      card1Desc: "Phân tích năng lực thành viên để tập hợp liên doanh hiệu quả cao bao gồm nhiều doanh nghiệp và trường ĐH.",
      card2Title: "Tư vấn Đặc thù Dự án",
      card2Desc: "Tư vấn tối đa hóa tỷ lệ chiến thắng dự án, bao gồm viết đề xuất, lập kế hoạch kinh doanh và đối phó đánh giá.",
      card3Title: "Đào tạo Thực tế Theo Dự án",
      card3Desc: "Thực hiện đào tạo năng lực về công nghệ mới nhất mà nhân sự thành viên cần để giải quyết dự án.",
      card4Title: "Quản trị Nhà nước - Học thuật - Công nghiệp",
      card4Desc: "Hub dẫn dắt các đề xuất chính sách, phát hiện dự án mới thông qua trao đổi tích cực giữa chính phủ, trường tư và DN."
    },
    organization: {
      title: "Cơ cấu Tổ chức",
      desc: "Hoạt động qua 5 phòng ban để giành thầu và thực thi hoàn hảo.",
      depts: [
        { name: 'Hỗ trợ Hoạt động', desc: 'Quản lý chung và quản lý hệ thống hỗ trợ thành viên bền vững' },
        { name: 'Hỗ trợ Kết nối', desc: 'Phân tích dự án của khách hàng & lập liên doanh' },
        { name: 'Khối Tư vấn', desc: 'Xây dựng chiến lược đề xuất/triển khai và hỗ trợ tư vấn' },
        { name: 'Phát triển Đào tạo', desc: 'Đào tạo ngoại tuyến/trực tuyến thực tế tùy chỉnh theo nhu cầu' },
        { name: 'Quan Hệ Đối Ngoại', desc: 'Xây dựng mạng lưới khách hàng (chính quyền/trường) và truyền thông' }
      ]
    },
    projects: {
      title: "Các dự án đã hoàn thành",
      desc: "Hồ sơ theo dõi các dự án và hợp tác thành công do hiệp hội chúng tôi dẫn dắt.",
      empty: "Chưa có dự án nào được đăng ký.",
      btnAdmin: "Vào Màn hình Quản trị viên",
      items: [
        {
          id: "1",
          title: "Dự án thí điểm đầu tiên của Hiệp hội Đổi mới Công nghiệp Kỹ thuật số",
          client: "Ban Thúc đẩy Đổi mới Kỹ thuật số",
          year: "2025",
          description: "Dự án xây dựng liên minh và phát triển nền tảng ban đầu nhằm thiết lập hệ sinh thái đổi mới kỹ thuật số. Các công ty thành viên khác nhau tham gia vận hành môi trường thử nghiệm (testbed)."
        }
      ]
    },
    admin: {
      title: "Admin - Quản lý Dự án",
      list: "Danh sách",
      add: "Thêm Dự án mới",
      formTitle: "Tên Dự án",
      formClient: "Khách hàng/Nhà thầu",
      formDate: "Năm (VD: 2025)",
      formDesc: "Mô tả",
      submit: "Lưu Dự án",
      submitting: "Đang lưu...",
      cancel: "Hủy",
      delete: "Xóa",
      back: "Quay lại trang chủ"
    },
    contact: {
      title: "Truy vấn Dự án",
      desc1: "Bạn cần giúp đỡ về đề xuất hay thành lập liên doanh dự án?",
      desc2: "Để lại yêu cầu, chúng tôi sẽ hướng dẫn kết nối đối tác cũng như cung cấp tư vấn.",
      officeTitle: "Office",
      address: "636-14 Dongtan-daero, Hwaseong-si, Gyeonggi-do",
      successTitle: "Gửi Thành công!",
      successDesc: "Chúng tôi sẽ sớm liên hệ lại với bạn theo thông tin đã cung cấp.",
      btnNew: "Tạo Yêu cầu Mới",
      labelName: "Họ tên / Chức vụ",
      plName: "Nguyen Van A, Quản lý",
      labelCompany: "Cơ quan",
      plCompany: "Tên Doanh nghiệp / ĐH",
      labelEmail: "Email",
      plEmail: "email@company.com",
      labelMessage: "Nội dung",
      plMessage: "Xin để lại câu hỏi hoặc lĩnh vực quan tâm",
      btnSubmit: "Gửi Yêu cầu",
      btnSubmitting: "Đang gửi..."
    },
    footer: {
      title: "Hiệp hội Đổi mới Công nghiệp Kỹ thuật số",
      desc: "Trạm trung chuyển kinh doanh về dự án chính phủ, kết nối doanh nghiệp và trường ĐH.",
      contact: "Contact",
      links: "Links",
      copyright: "© 2025 Hiệp hội Đổi mới Công nghiệp Kỹ thuật số. Đã đăng ký bản quyền.",
      badge: "Thúc đẩy tổ chức phi lợi nhuận (MSIT)"
    }
  }
};
