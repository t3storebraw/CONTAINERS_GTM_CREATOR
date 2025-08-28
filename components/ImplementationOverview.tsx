
import React from 'react';
import { GtmContainerVersion, GtmExport, GtmTag, GtmTrigger, GtmVariable } from '../types';
import { TagIcon, TriggerIcon, VariableIcon } from './icons';

interface OverviewListProps<T extends { name: string }> {
    title: string;
    items: T[];
    icon: React.ReactNode;
    getDetails: (item: T) => React.ReactNode;
}

const OverviewList = <T extends { name: string }>({ title, items, icon, getDetails }: OverviewListProps<T>) => (
    <div>
        <h4 className="text-lg font-semibold text-indigo-300 mb-3 flex items-center gap-2">
            {icon} {title} ({items.length})
        </h4>
        <ul className="space-y-2 text-sm">
            {items.map(item => (
                <li key={item.name} className="relative group bg-gray-700/50 p-2 rounded-md truncate" title={item.name}>
                    {item.name}
                     <div 
                      role="tooltip"
                      className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max max-w-xs p-3 bg-gray-900 border border-gray-700 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg pointer-events-none text-left"
                    >
                      <span className="font-bold block text-indigo-300">{item.name}</span>
                      <div className="text-gray-400 mt-1 space-y-1">{getDetails(item)}</div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);


interface OverviewColumnProps {
    title: string;
    container: GtmContainerVersion;
}

const OverviewColumn: React.FC<OverviewColumnProps> = ({ title, container }) => {
    const triggerIdToNameMap = new Map(container.trigger?.map(t => [t.triggerId, t.name]));

    return (
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-center text-white mb-6">{title}</h3>
            <div className="space-y-6">
                {container.tag && container.tag.length > 0 && (
                    <OverviewList
                        title="Tags"
                        items={container.tag}
                        icon={<TagIcon />}
                        getDetails={(item: GtmTag) => {
                            const triggerNames = item.firingTriggerId?.map(id => triggerIdToNameMap.get(id) || `ID: ${id}`).join(', ');
                            return (
                                <>
                                    <div><span className="font-semibold text-gray-200">Type:</span> {item.type}</div>
                                    <div><span className="font-semibold text-gray-200">Fires on:</span> {triggerNames || 'None'}</div>
                                </>
                            );
                        }}
                    />
                )}
                {container.trigger && container.trigger.length > 0 && (
                     <OverviewList
                        title="Triggers"
                        items={container.trigger}
                        icon={<TriggerIcon />}
                        getDetails={(item: GtmTrigger) => <div><span className="font-semibold text-gray-200">Type:</span> {item.type}</div>}
                    />
                )}
                {container.variable && container.variable.length > 0 && (
                    <OverviewList
                        title="Variables"
                        items={container.variable}
                        icon={<VariableIcon />}
                        getDetails={(item: GtmVariable) => <div><span className="font-semibold text-gray-200">Type:</span> {item.type}</div>}
                    />
                )}
            </div>
        </div>
    );
};


interface ImplementationOverviewProps {
  webContainer: GtmExport;
  serverContainer: GtmExport;
}

export const ImplementationOverview: React.FC<ImplementationOverviewProps> = ({ webContainer, serverContainer }) => {
    return (
        <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-6 text-white">Implementation Overview</h2>
            <p className="text-center text-gray-400 max-w-3xl mx-auto mb-8">
                Here's a summary of the tags, triggers, and variables that will be added to your GTM workspaces. Hover over an item for more details.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <OverviewColumn title="Web Container" container={webContainer.containerVersion} />
                <OverviewColumn title="Server Container" container={serverContainer.containerVersion} />
            </div>
        </div>
    );
};
