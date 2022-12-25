<svelte:head>
  <title>[프로그래머의 뇌] 인지과학으로 접근하는 코드 이해</title>
</svelte:head>
      <script>
        import Error from "$lib/notion2svelte/Error.svelte";
        import Cover from "$lib/notion2svelte/Cover.svelte"
        import Title from "$lib/notion2svelte/Title.svelte"
        import BulletedListItem from "$lib/notion2svelte/BulletedListItem.svelte"
        import Callout from "$lib/notion2svelte/Callout.svelte"
        import ChildPage from "$lib/notion2svelte/ChildPage.svelte"
        import Code from "$lib/notion2svelte/Code.svelte"
        import ColumnList from "$lib/notion2svelte/ColumnList.svelte"
        import Column from "$lib/notion2svelte/Column.svelte"
        import Divider from "$lib/notion2svelte/Divider.svelte"
        import Embed from "$lib/notion2svelte/Embed.svelte"
        import Header from "$lib/notion2svelte/Header.svelte"
        import Image from "$lib/notion2svelte/Image.svelte"
        import IndentGroup from "$lib/notion2svelte/IndentGroup.svelte"
        import Underline from "$lib/notion2svelte/Underline.svelte"
        import InlineCode from "$lib/notion2svelte/InlineCode.svelte"
        import InlineColor from "$lib/notion2svelte/InlineColor.svelte"
        import Equation from "$lib/notion2svelte/Equation.svelte"
        import Link from "$lib/notion2svelte/Link.svelte"
        import NumberedListItem from "$lib/notion2svelte/NumberedListItem.svelte"
        import Paragraph from "$lib/notion2svelte/Paragraph.svelte"
        import Quote from "$lib/notion2svelte/Quote.svelte"
        import TodoItem from "$lib/notion2svelte/TodoItem.svelte"
        import Toggle from "$lib/notion2svelte/Toggle.svelte"
        import { setContext } from 'svelte';

        setContext('pageStuff', {
  "pageId": "1124ebcc0e55431fbd22a11702c0fdb4",
  "title": "[프로그래머의 뇌] 인지과학으로 접근하는 코드 이해"
});
      </script>
      

  <Cover coverURL={"/assets/프로그래머의_뇌를_읽고서/cover.jpg"} iconEmojiOrURL={"undefined"} />

  <Title>[프로그래머의 뇌] 인지과학으로 접근하는 코드 이해</Title>




  <Image url="/assets/프로그래머의_뇌를_읽고서/aeae19ea-0e2a-4fc9-8e24-cdfe27fa9cb9.png" caption="펠리너 헤르만스 - 프로그래머의 뇌">펠리너 헤르만스 - 프로그래머의 뇌</Image>
<Paragraph blockProps={{"pageId":"1124ebcc0e55431fbd22a11702c0fdb4","id":"9f5d74af-2c11-456e-bd7b-40c0b4ef76f3","created_time":"2022-12-25T12:25:00.000Z","last_edited_time":"2022-12-25T13:46:00.000Z"}}>
친구와 영어 스터디하러 잠실에 온 김에 마침 새로 읽을 책도 필요한터라 교보 문고에 갔다. 적당히 소설이나 사서 읽을려고 두리번 거렸는데 뭔가 끌린듯 이 책을 고르게 되었다. 평소 인지과학쪽 책, 그것도 전공서같은걸 사서 읽는 편이라 위 책도 그런 느낌이 들어서 고르게 되었다. 훑어보니&ensp;<InlineCode code={"작업기억"} />,&ensp;<InlineCode code={"LTM(Long term memory)"} />&ensp; 등 인지 과학 쪽 분야를 생각보다 깊게 다룬거 같았다. 딱 봐도 재밌어보여서 샀는데(그 땐 개발 딱 1년차였다) 지금 와서 다시보니 리팩토링에 대한 새로운 견해도 얻게되었고 아무튼! 너무 재밌게 읽어서 책 내용을 소개해 볼까한다.
</Paragraph>
<Toggle>아참! 아래 글을 읽기 전 인지과학 쪽 용어를 잠깐 소개
<span slot="children"><Callout emoji="💡">인지과학<span slot="children"><Quote>인지과학은 인간의 마음과 컴퓨터와 같은 지능적 체계의 성질, 구체적으로는 학습, 추론, 언어, 문제해결 등을 각 분야에서 발전시켜 온 방법론과 이론을 적용하여 분과학문체계를 넘어서 연구활동을 수행하는 기초학문분야이다.</Quote><Paragraph blockProps={{"pageId":"1124ebcc0e55431fbd22a11702c0fdb4","id":"60716117-0216-49a1-a791-8a48ee42b097","created_time":"2022-12-25T12:46:00.000Z","last_edited_time":"2022-12-25T12:53:00.000Z"}}>
놀랍게도 인간의 인식 과정은 컴퓨터의 처리 과정과 비슷하다. ㄴㅇㄱ!! 이런 우연이!
</Paragraph>
<Paragraph blockProps={{"pageId":"1124ebcc0e55431fbd22a11702c0fdb4","id":"6b2ba589-bfcd-4a87-b92f-a3e6f2bf52c7","created_time":"2022-12-25T12:53:00.000Z","last_edited_time":"2022-12-25T12:54:00.000Z"}}>
<s>(사실은 인간에 대한 인식은 이럴 것이다란 개념이 먼저 나오고 그 뒤에 그 개념을 컴퓨터란 물체로 재현한게 아닐까?)</s>
</Paragraph>
<Paragraph blockProps={{"pageId":"1124ebcc0e55431fbd22a11702c0fdb4","id":"f8b866bc-d806-42a0-a1c0-4c8ccd32b0f0","created_time":"2022-12-25T12:46:00.000Z","last_edited_time":"2022-12-25T13:12:00.000Z"}}>
인지과학에서 기억을 4가지로&ensp;<InlineCode code={"감각 기억"} />,&ensp;<InlineCode code={"작업 기억"} />,&ensp;<InlineCode code={"STM(Shrot term memory)"} />,&ensp;<InlineCode code={"LTM(Long term memory)"} />&ensp;구분하는데 각각을 컴퓨터 용어에 대입하면 아래와 같다.
</Paragraph>
table<IndentGroup>
  table_rowtable_rowtable_rowtable_row
</IndentGroup>
<Paragraph blockProps={{"pageId":"1124ebcc0e55431fbd22a11702c0fdb4","id":"cd66e795-3d04-4605-9780-58e78577d7fd","created_time":"2022-12-25T12:49:00.000Z","last_edited_time":"2022-12-25T13:12:00.000Z"}}>
즉 인간의 정보 처리는 시각이나 청각 정보가 감각 기억에서 잠깐 저장된 뒤, 작업 기억으로 옮겨져 LTM의 정보를 가져와 처리한다. 단 컴퓨터와 다른점은 램은 16기가가 넘을수도 있지만, 작업 기억은 평균적으로 2~6개의 정보만 기억할 수 있다.
</Paragraph>
</span></Callout></span></Toggle><Paragraph blockProps={{"pageId":"1124ebcc0e55431fbd22a11702c0fdb4","id":"d7f6381b-58a8-4386-87ed-3c3fd857de38","created_time":"2022-12-25T12:32:00.000Z","last_edited_time":"2022-12-25T14:20:00.000Z"}}>
필자는 학창시절부터 이런 인지과학 쪽 지식을 배우는걸 좋아했다. 나에게 있어 공부란 단순히 지식을 습득하는 것을 넘어 이해력, 사고력을 기르는 목표라고 생각했고, 따라서 점수가 목표가 아니라 본질적으로 내가 똑똑해지는 것에 초점을 맞춰 문제를 풀곤 했었다. 가령 수학에서는 작업 기억능력을 기른답시고 암산으로 문제를 푸는 연습을 했었다. 처음에는 머릿 속 생각을 도중에 잃어버리는 일이 잦아 거의 불가능 했었는데 연습하니 웬만한 모의고사 문제는 모두 암산으로 풀만 했다.<s>(물론 암산으로 모든 문제를 풀기엔 정신이 급격히 피로해 지지만..)&ensp;</s>
</Paragraph>
<Paragraph blockProps={{"pageId":"1124ebcc0e55431fbd22a11702c0fdb4","id":"c86b7a5e-147f-4828-abf1-43f882d6a809","created_time":"2022-12-25T12:41:00.000Z","last_edited_time":"2022-12-25T14:20:00.000Z"}}>
이렇게 작업 기억을 향상시켰으니 코딩도 금방 배우지 않을까? 란 생각에 개발자에 길로 들어 섰지만.. 코드를 머릿속에서 구현하는 것은 물론, 본 것도 기억하기가 쉽지 않았다. 나에게 인식이란 심근론처럼 모든 인지 능력을 관장하는 마음의 근육이란게 있어서 이것만 기르면 어떤 종류의 정보도 쉽게 기억하고 처리할 수 있다였는데.. 그게 아니였다. 즉 미적분을 공부해서 얻을 수 있는 능력은 그저 미적분을 잘 푸는것 뿐이다.
</Paragraph>
<Paragraph blockProps={{"pageId":"1124ebcc0e55431fbd22a11702c0fdb4","id":"e6fd8b15-d59e-46d5-bc05-07f6101409e7","created_time":"2022-12-25T13:00:00.000Z","last_edited_time":"2022-12-25T13:47:00.000Z"}}>
이 책을 읽으면서 내가 두 가지의 잘못된 생각을 가지고 있다는걸 깨달았다.
</Paragraph>
<NumberedListItem number=1> 내가 기른건 작업기억이 아니었다.</NumberedListItem>
<NumberedListItem number=2> 수학은 생각보다 코딩 능력과 관련이 없다.</NumberedListItem>
<Paragraph blockProps={{"pageId":"1124ebcc0e55431fbd22a11702c0fdb4","id":"9995b042-1b86-4e7f-8309-0a09f7af3d44","created_time":"2022-12-25T13:06:00.000Z","last_edited_time":"2022-12-25T13:19:00.000Z"}}>
첫째로, 나는 작업 기억을 늘렸다기보다 수학 문제를 잘 푸는 노하우를 기른 것이었다. 나의 암산 능력은 기억력이 아닌 작업 기억의 청킹(chunking)능력에 비롯한 거였는데 암산할 수 있는 양은 한정된 용량에서 얼마나 효율적으로 정보를 압축하느냐에 따라 좌우되던 것이었다.
</Paragraph>
<Paragraph blockProps={{"pageId":"1124ebcc0e55431fbd22a11702c0fdb4","id":"e4ccdbf4-5957-4198-85af-f072a0b77cfa","created_time":"2022-12-25T13:08:00.000Z","last_edited_time":"2022-12-25T14:20:00.000Z"}}>
둘째로, 코딩 능력과 가장 관련 있는 인지 능력은&ensp;<InlineCode code={"작업 기억과 추론 능력"} />&ensp;, 그 다음으로는 놀랍게도&ensp;<InlineCode code={"언어 능력"} />&ensp;이었다.&ensp;<InlineCode code={"수학"} />은 별로 영향을 주지 못했다. 고등학교때 장난으로 언어 공부한답시고 c언어 책 사서 읽었었는데 정말.. 프로그래밍 언어는 문자 그대로&ensp;<InlineCode code={"언어"} />였다..
</Paragraph>
<Paragraph blockProps={{"pageId":"1124ebcc0e55431fbd22a11702c0fdb4","id":"448e43bf-2fb3-4240-bff7-7275024e441a","created_time":"2022-12-25T13:15:00.000Z","last_edited_time":"2022-12-25T14:20:00.000Z"}}>
책을 읽으면서 잘못된 견해도 바로잡고, 책과 일치한 견해는 책을 통해 더욱 정교해졌다. 내 생각에 이책을 읽으면 좋을&ensp;<InlineCode code={"추천독자"} />는 주니어 보다&ensp;<InlineCode code={"시니어"} />&ensp;일거 같다. 프로그래밍을 하면서 겪었던 인지 경험을 바탕으로 위 책을 읽으면 공감도 되고 내 생각을 뒷받침해주는 근거들을 실제 실험 사례를 보며 찾을 수 있을거다.&ensp;
</Paragraph>
<Paragraph blockProps={{"pageId":"1124ebcc0e55431fbd22a11702c0fdb4","id":"054991b2-c1f8-47ad-bf33-5072986b7e66","created_time":"2022-12-25T13:30:00.000Z","last_edited_time":"2022-12-25T14:20:00.000Z"}}>
이 책의 초반부분에는 코드를 읽기 어려운 이유를 여러 종류의 인지 부하를 예로 설명한다. 시니어들은 이를 보며 주니어들의 마음을 헤아려 주길 바란다. 주니어들은 시니어들보다 코드를 이해하는데 훨씬 어려움을 겪는다. 이해란 일종의 정신적 모델을 구축해 사실을 자기 나름대로 추상화하는 작용인데 뉴비들에게는 지식이 텍스트 이상의 것으로 추상화되지 못한다. 그래서 대화를 하다보면 묘하게 핀트가 어긋나있는 걸 발견하게 된다.&ensp;
</Paragraph>
<Paragraph blockProps={{"pageId":"1124ebcc0e55431fbd22a11702c0fdb4","id":"7d43cc7c-e1ff-4455-ab15-31a042241f76","created_time":"2022-12-25T13:35:00.000Z","last_edited_time":"2022-12-25T13:47:00.000Z"}}>
사실 주니어가 지식을 습득하는거보다 시니어가 지식을 가르치는 일이 더욱 까다로운 스킬이 필요하다. 뉴비는 답답하겠지만 자기가 무엇을 알고 있고, 무엇을 모르고 있는지를 모른다. 시니어의 역할은 이런 주니어의 빈틈, 즉 오개념을 파고들어 주니어로 하여금 정교한 정신적 모델을 구축할 수 있게 해주는게 아닐까? 중학교때 원어민 수업시간에서 있었던 일이 떠오른다. 상대방으로 하여금 정답을 맞추게 하기위해 영어로 설명하는 퀴즈였는데, 문제를 설명하는 학생을 보며 원어민 교사분이 이렇게 말했다.&ensp;
</Paragraph>
<Paragraph blockProps={{"pageId":"1124ebcc0e55431fbd22a11702c0fdb4","id":"c78494f9-6085-408d-a201-b0a1905c9278","created_time":"2022-12-25T13:38:00.000Z","last_edited_time":"2022-12-25T14:20:00.000Z"}}>
“같은 말만 반복한다고 이해되지 않는 문제가 저절로 이해되지 않아요~”
</Paragraph>
<Paragraph blockProps={{"pageId":"1124ebcc0e55431fbd22a11702c0fdb4","id":"8c71b81d-341b-45a6-bb1b-8667d05d3950","created_time":"2022-12-25T13:35:00.000Z","last_edited_time":"2022-12-25T14:20:00.000Z"}}>
마찬가지로 누군가를 가르칠때 그 대상이 자신의 말을 이해하지 못했다고, 다시 똑같은 말을 어조나 템포만 바꿔서 말하는데, 애초에 같은 말을 천천히 듣는다고 이해될거라면 처음에 들었을때도 이해했을 것이다. 이러한 필자의 견해는 5년간의 과외 경험을 통해 얻을 수 있었다.
</Paragraph>
<Paragraph blockProps={{"pageId":"1124ebcc0e55431fbd22a11702c0fdb4","id":"ca59e00b-2aed-449a-8dc4-80f76b890a74","created_time":"2022-12-25T13:42:00.000Z","last_edited_time":"2022-12-25T13:52:00.000Z"}}>
다행히도 책에서는 코드를 더 잘 이해하는 방법들도 소개한다. 어떻게 하면 코드를 더 많이 기억할 수 있을지, 어떻게 하면 필요한 부분만 찾아 읽을 수 있는지 등 유용한 기법들이 많이 소개되어 있다. 더욱이 이런 기법들이 저자의 개인적인 경험이 아닌 인지 과학의 탄탄한 실험들을 근간에서 비롯된 것들이니 믿음직하다. 더 놀라운 점은!! 사실 필자는 아직 책을 절반밖에 읽지 않았다. 그래서 이 글에서 밝히지 못한 더욱 놀라운 내용들을 책을 읽으며 알아 갈 수 있을 것이다. 필지가 읽으면서 가장 흥미로운 대목은&ensp;<InlineCode code={"인지적 리팩토링"} />&ensp;이다. 리팩토링인데 코드의 확장성이 아닌 가독성에 초점을 맞추는 방법은 리팩토링에 대한 안목을 넓혀주었다. 이와 관련해서 재밌게 본 영상이 있는데 시청한 뒤 이 책을 읽으면 더욱 재밌을 것이다.
</Paragraph>
<Paragraph blockProps={{"pageId":"1124ebcc0e55431fbd22a11702c0fdb4","id":"42086e62-5640-448e-aa9e-e558f8bfcbcf","created_time":"2022-12-25T14:18:00.000Z","last_edited_time":"2022-12-25T14:18:00.000Z"}}>
<Link type="absolute" href='https://www.youtube.com/watch?v=emGLxi0LvNI'>https://www.youtube.com/watch?v=emGLxi0LvNI</Link>
</Paragraph>
<Paragraph blockProps={{"pageId":"1124ebcc0e55431fbd22a11702c0fdb4","id":"3fd9fadb-7df6-43d9-b4d0-9359356559dc","created_time":"2022-12-25T14:18:00.000Z","last_edited_time":"2022-12-25T14:18:00.000Z"}}>

</Paragraph>

  