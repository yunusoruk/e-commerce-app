"use client"

import { Button } from '@/components/ui/button';
import Header from '@/components/ui/header';
import { Separator } from '@/components/ui/separator';
import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import type { FC } from 'react';
import { CategoryColumn, columns } from './columns';
import { DataTable } from '@/components/ui/data-table';
import ApiList from '@/components/ui/api-list';

interface CategoryClientProps {
    data: CategoryColumn[]
}

const CategoryClient: FC<CategoryClientProps> = ({ data }) => {

    const router = useRouter()
    const params = useParams()


    return (
        <>
            <div className="flex items-center justify-between">
                <Header
                    title={`Categories (${data.length})`}
                    description='Manage categories for your store'
                />
                <Button variant="default" size="default" onClick={() => router.push(`/${params.storeId}/categories/new`)} >
                    <Plus className='mr-2 h-5 w-5' />
                    Add New
                </Button>

            </div>
            <Separator />
            <DataTable
                columns={columns}
                data={data}
                searchKey='name'
                placeholder="Filter categories..."
            />
            <Header title='API' description='API calls for categories' />
            <Separator />
            <ApiList
                entityName='categoires'
                entityIdName='categoryId'
            />
        </>
    );
}
export default CategoryClient;