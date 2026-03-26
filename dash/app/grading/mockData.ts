import { ClassCourse, RubricCriterion, Student } from "@/lib/grading/types";

export const mockClasses: ClassCourse[] = [
  {
    id: "cs101",
    code: "CS 101",
    name: "Компьютерийн Шинжлэх Ухааны Үндэс",
    assignmentLabel: "Дундын шалгалт",
    pending: 12,
    graded: 33,
    total: 45,
  },
  {
    id: "cs201",
    code: "CS 201",
    name: "Өгөгдлийн Бүтэц ба Алгоритм",
    assignmentLabel: "Квиз 2",
    pending: 5,
    graded: 33,
    total: 38,
  },
  {
    id: "cs301",
    code: "CS 301",
    name: "Мэдээллийн Сангийн Систем",
    assignmentLabel: undefined as unknown as string,
    pending: 0,
    graded: 52,
    total: 52,
  },
  {
    id: "cs401",
    code: "CS 401",
    name: "Програм Хангамжийн Инженерчлэл",
    assignmentLabel: "Төслийн Хянан Шалгалт",
    pending: 8,
    graded: 23,
    total: 31,
  },
];

const DEFAULT_RUBRIC: RubricCriterion[] = [
  {
    id: "accuracy",
    name: "Агуулгын Үнэн Зөв Байдал",
    description: "Хариултын зөв ба гүнзгий байдал",
    maxScore: 10,
    score: 0,
  },
  {
    id: "clarity",
    name: "Тодорхой ба Зохион Байгуулалт",
    description: "Бүтэц, урсгал, уншигдах байдал",
    maxScore: 5,
    score: 0,
  },
];

export const studentsByClass: Record<string, Student[]> = {
  cs101: [
    {
      id: "morgan-davis",
      name: "Морган Дэвис",
      email: "m.davis@university.edu",
      initials: "МД",
      submittedAt: "5м өмнө",
      status: "Хүлээгдэж байна",
      mcScore: 32,
      mcTotal: 40,
      essays: [
        {
          id: 1,
          question:
            "Объект хандалтат програмчлалын ойлголтыг тайлбарлаж, дөрвөн үндсэн зарчмыг жишээ сайт ярилцана уу.",
          studentAnswer:
            "OOP бол объект ашигладаг програмчлалын арга юм. Дөрвөн зарчим нь: капсулжуулалт, өвлөлт, полиморфизм, хийсвэрлэлт юм. Капсулжуулалт нь өгөгдлийг нууцалдаг. Өвлөлт нь классуудад код хуваалцах боломж олгодог. Полиморфизм нь ижил нэртэй методыг өөр зүйлд ашиглах боломж олгодог. Хийсвэрлэлт нь нарийн төвөгтэй байдлыг нуудаг.",
          rubric: JSON.parse(JSON.stringify(DEFAULT_RUBRIC)),
          feedback: "",
        },
        {
          id: 2,
          question:
            "Цагийн нарийн төвөгтэй байдлын тойм өгч, Big O тэмдэглэгээг жишээн дээр тайлбарлана уу.",
          studentAnswer:
            "Big O тэмдэглэгээ нь алгоритмын гүйцэтгэлийг хэрхэн өсдөгийг харуулдаг. O(1) нь тогтмол, O(n) нь шугаман, O(n²) нь квадрат цагийн нарийн төвөгтэй байдлыг илэрхийлдэг. Жишээ нь, массивын элементийг шууд авах нь O(1), бүх элементийг дамжих нь O(n) юм.",
          rubric: JSON.parse(JSON.stringify(DEFAULT_RUBRIC)),
          feedback: "",
        },
        {
          id: 3,
          question:
            "Стек болон дараалал (queue) өгөгдлийн бүтцийн ялгааг тайлбарлаж, хэрэглээний жишээ өгнө үү.",
          studentAnswer:
            "Стек нь LIFO зарчмаар ажилладаг — сүүлд орсон нь түрүүлж гардаг. Дараалал нь FIFO зарчмаар ажилладаг — эхэнд орсон нь эхэнд гардаг. Стекийг функц дуудлагад ашигладаг. Дараалалыг даалгавар удирдахад ашигладаг.",
          rubric: JSON.parse(JSON.stringify(DEFAULT_RUBRIC)),
          feedback: "",
        },
      ],
    },
    {
      id: "jamie-chen",
      name: "Жэйми Чэн",
      email: "j.chen@university.edu",
      initials: "ЖЧ",
      submittedAt: "15м өмнө",
      status: "Хүлээгдэж байна",
      mcScore: 35,
      mcTotal: 40,
      essays: [
        {
          id: 1,
          question:
            "Объект хандалтат програмчлалын ойлголтыг тайлбарлаж, дөрвөн үндсэн зарчмыг жишээ сайт ярилцана уу.",
          studentAnswer:
            "OOP бол объект ашигладаг програмчлалын арга юм. Дөрвөн зарчим нь: капсулжуулалт, өвлөлт, полиморфизм, хийсвэрлэлт юм. Капсулжуулалт нь өгөгдлийг нууцалдаг. Өвлөлт нь классуудад код хуваалцах боломж олгодог. Полиморфизм нь ижил нэртэй методыг өөр зүйлд ашиглах боломж олгодог. Хийсвэрлэлт нь нарийн төвөгтэй байдлыг нуудаг.",
          rubric: JSON.parse(JSON.stringify(DEFAULT_RUBRIC)),
          feedback: "",
        },
        {
          id: 2,
          question:
            "Цагийн нарийн төвөгтэй байдлын тойм өгч, Big O тэмдэглэгээг жишээн дээр тайлбарлана уу.",
          studentAnswer:
            "Big O тэмдэглэгээ нь алгоритмын гүйцэтгэлийг хэрхэн өсдөгийг харуулдаг. O(1) нь тогтмол, O(n) нь шугаман цагийн нарийн төвөгтэй байдлыг илэрхийлдэг.",
          rubric: JSON.parse(JSON.stringify(DEFAULT_RUBRIC)),
          feedback: "",
        },
        {
          id: 3,
          question:
            "Стек болон дараалал (queue) өгөгдлийн бүтцийн ялгааг тайлбарлаж, хэрэглээний жишээ өгнө үү.",
          studentAnswer:
            "Стек LIFO, дараалал FIFO зарчмаар ажилладаг. Стекийг undo функцэд, дараалалыг хэвлэх дарааллыг удирдахад ашигладаг.",
          rubric: JSON.parse(JSON.stringify(DEFAULT_RUBRIC)),
          feedback: "",
        },
      ],
    },
    {
      id: "alex-thompson",
      name: "Алекс Томпсон",
      email: "alex.t@university.edu",
      initials: "АТ",
      submittedAt: "28м өмнө",
      status: "Дүгнэгдсэн",
      mcScore: 38,
      mcTotal: 40,
      essays: [
        {
          id: 1,
          question:
            "Объект хандалтат програмчлалын ойлголтыг тайлбарлаж, дөрвөн үндсэн зарчмыг жишээ сайт ярилцана уу.",
          studentAnswer:
            "OOP нь объект, класс ашиглан ертөнцийн зүйлсийг загварчлах арга юм. Дөрвөн зарчим: Капсулжуулалт — өгөгдөл болон аргуудыг нэг нэгжид багцалдаг. Өвлөлт — хүүхэд класс эцэг классаас шинж чанар авдаг. Полиморфизм — нэг интерфейсээр олон хэлбэрийг дэмждэг. Хийсвэрлэлт — дотоод нарийн төвөгтэй байдлыг нуудаг.",
          rubric: [
            { ...DEFAULT_RUBRIC[0], score: 9 },
            { ...DEFAULT_RUBRIC[1], score: 5 },
          ],
          feedback:
            "Маш сайн хариулт. Бүх дөрвөн зарчмыг тодорхой тайлбарласан. Жишээнүүд нь хэт товч байсан.",
        },
        {
          id: 2,
          question:
            "Цагийн нарийн төвөгтэй байдлын тойм өгч, Big O тэмдэглэгээг жишээн дээр тайлбарлана уу.",
          studentAnswer:
            "Big O нь алгоритмын гүйцэтгэл оролтын хэмжээнээс хэрхэн хамааралтайг тодорхойлдог. O(1) — хэмжээнээс үл хамаарах. O(log n) — хоёртын хайлт. O(n) — шугаман хайлт. O(n log n) — MergeSort. O(n²) — бөмбөлөгний эрэмбэлэлт.",
          rubric: [
            { ...DEFAULT_RUBRIC[0], score: 10 },
            { ...DEFAULT_RUBRIC[1], score: 5 },
          ],
          feedback: "Бүрэн гүйцэд, маш сайн.",
        },
        {
          id: 3,
          question:
            "Стек болон дараалал (queue) өгөгдлийн бүтцийн ялгааг тайлбарлаж, хэрэглээний жишээ өгнө үү.",
          studentAnswer:
            "Стек: LIFO — сүүлд орсон нь эхлээд гардаг. Хэрэглээ: функц дуудлага, undo/redo, илэрхийлэл шинжилгээ. Дараалал: FIFO — эхэнд орсон нь эхлээд гардаг. Хэрэглээ: процессын удирдлага, мессежийн дараалал, хэвлэлийн дараалал.",
          rubric: [
            { ...DEFAULT_RUBRIC[0], score: 10 },
            { ...DEFAULT_RUBRIC[1], score: 5 },
          ],
          feedback: "Маш дэлгэрэнгүй тайлбарласан.",
        },
      ],
    },
    {
      id: "sam-wilson",
      name: "Сэм Вилсон",
      email: "s.wilson@university.edu",
      initials: "СВ",
      submittedAt: "45м өмнө",
      status: "Хүлээгдэж байна",
      mcScore: 28,
      mcTotal: 40,
      essays: [
        {
          id: 1,
          question:
            "Объект хандалтат програмчлалын ойлголтыг тайлбарлаж, дөрвөн үндсэн зарчмыг жишээ сайт ярилцана уу.",
          studentAnswer:
            "OOP нь классууд болон объект ашигладаг. Би капсулжуулалт болон өвлөлтийн тухай мэднэ. Капсулжуулалт нь зүйлсийг хамт хадгалдаг. Өвлөлт нь нэг классаас нөгөөд шилжүүлдэг.",
          rubric: JSON.parse(JSON.stringify(DEFAULT_RUBRIC)),
          feedback: "",
        },
        {
          id: 2,
          question:
            "Цагийн нарийн төвөгтэй байдлын тойм өгч, Big O тэмдэглэгээг жишээн дээр тайлбарлана уу.",
          studentAnswer:
            "Big O нь алгоритм хэр хурдан ажилладагийг хэлдэг. O(n) нь n дахин гүйцэтгэнэ гэсэн үг.",
          rubric: JSON.parse(JSON.stringify(DEFAULT_RUBRIC)),
          feedback: "",
        },
        {
          id: 3,
          question:
            "Стек болон дараалал (queue) өгөгдлийн бүтцийн ялгааг тайлбарлаж, хэрэглээний жишээ өгнө үү.",
          studentAnswer:
            "Стек болон дараалал хоёулаа өгөгдөл хадгалдаг боловч ялгаатай аргаар.",
          rubric: JSON.parse(JSON.stringify(DEFAULT_RUBRIC)),
          feedback: "",
        },
      ],
    },
  ],
  cs201: [
    {
      id: "bat-erdene",
      name: "Бат-Эрдэнэ Дорж",
      email: "b.dorj@university.edu",
      initials: "БД",
      submittedAt: "10м өмнө",
      status: "Хүлээгдэж байна",
      mcScore: 18,
      mcTotal: 25,
      essays: [
        {
          id: 1,
          question:
            "Динамик програмчлалыг тайлбарлаж, жишээ алгоритм дэлгэрэнгүй тайлбарлана уу.",
          studentAnswer:
            "Динамик програмчлал нь асуудлыг жижиг дэд асуудалд хувааж, үр дүнг кэш болгон хадгалдаг. Фибоначчи тооны дараалал нь сонгодог жишээ — F(n) = F(n-1) + F(n-2).",
          rubric: JSON.parse(JSON.stringify(DEFAULT_RUBRIC)),
          feedback: "",
        },
      ],
    },
    {
      id: "unur-tsetseg",
      name: "Үнэр-Цэцэг Ганбаяр",
      email: "u.ganbayar@university.edu",
      initials: "ҮГ",
      submittedAt: "22м өмнө",
      status: "Хүлээгдэж байна",
      mcScore: 21,
      mcTotal: 25,
      essays: [
        {
          id: 1,
          question:
            "Динамик програмчлалыг тайлбарлаж, жишээ алгоритм дэлгэрэнгүй тайлбарлана уу.",
          studentAnswer:
            "Динамик програмчлал нь мемоизаци болон таблизациг ашигладаг. Энэ нь дэд асуудлын хариуг давтан тооцоолохоос зайлсхийдэг. Knapsack асуудал нь DP-ийн сайн жишээ юм.",
          rubric: JSON.parse(JSON.stringify(DEFAULT_RUBRIC)),
          feedback: "",
        },
      ],
    },
  ],
  cs401: [
    {
      id: "enkhjargal",
      name: "Энхжаргал Мөнх",
      email: "e.munkh@university.edu",
      initials: "ЭМ",
      submittedAt: "1ц өмнө",
      status: "Хүлээгдэж байна",
      mcScore: 14,
      mcTotal: 20,
      essays: [
        {
          id: 1,
          question:
            "Agile болон Waterfall хөгжүүлэлтийн аргачлалыг харьцуулж, тус бүрийн давуу болон сул талуудыг дурдана уу.",
          studentAnswer:
            "Agile нь уян хатан, давталтат арга. Waterfall нь тогтмол алхамтай шугаман арга. Agile нь өөрчлөлтийг хурдан хүлээж авдаг. Waterfall нь том, тогтвортой төсөлд тохиромжтой.",
          rubric: JSON.parse(JSON.stringify(DEFAULT_RUBRIC)),
          feedback: "",
        },
      ],
    },
  ],
};
