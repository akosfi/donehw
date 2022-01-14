import { FC, memo } from "react";
//
import PageLayout from "components/common/PageLayout";
import CarsList from "components/pages/CarsPage/components/CarsList";

const CarsPage: FC = () => (
    <PageLayout>
        <CarsList />
    </PageLayout>
);

export default memo(CarsPage);
