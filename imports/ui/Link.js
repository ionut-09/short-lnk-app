import React from 'react';
// import { Link } from 'react-router-dom';
// import { Meteor } from 'meteor/meteor';
// import { Lnks } from '../api/links';

import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilters from './LinksListFilters';

export default () => {
        return(
            <div>
                <PrivateHeader title="Short Lnk"/>
                <div className="page-content">
                    <LinksListFilters/>
                    <AddLink/>
                    <LinksList/>
                </div>
            </div>
        );
};