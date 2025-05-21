import { Metadata } from "next";

import { NO_INDEX_PAGE } from "@/src/shared/config/site";
import { Page } from "@/src/widgets/Page/ui/Page";
import { HomeScreen } from "@/src/screens/HomeScreen/HomeScreen";

export const metadata: Metadata = {
  title: "Главная страница",
  ...NO_INDEX_PAGE,
};

export default function Home() {
  return (
    <Page>
      <HomeScreen />
    </Page>
  );
}
