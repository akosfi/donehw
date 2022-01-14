import { FC, memo } from "react";
//
import PageLayout from "components/common/PageLayout";
import RoutesList from "components/pages/RoutesPage/components/RoutesList";

const RoutesPage: FC = () => (
    <PageLayout>
        <RoutesList />
    </PageLayout>
);

export default memo(RoutesPage);
