import { componentData } from './data/component-data.js';
import { initTabs } from './modules/tabs.js';
import { initComponentExplorer } from './modules/component-explorer.js';
import { initSectionNavigation } from './modules/section-navigation.js';

document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initComponentExplorer(componentData);
    initSectionNavigation();
});
