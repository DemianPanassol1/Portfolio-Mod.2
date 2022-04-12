import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { transitionContent, variantsContent } from '../../lib/helpers';

import styles from './SectionTitle.module.scss';

const SectionTitle = ({ title, subtitle, lang }) => {

    const key1 = lang ? 1 : 2;
    const key2 = lang ? 3 : 4;

    return (
        <div className={styles.container}>
            <motion.h2
                key={key1}
                initial='initial'
                animate='animate'
                transition={transitionContent}
                variants={variantsContent}
                className={styles.containerTitle}
            >
                {title}
            </motion.h2>

            <span className={styles.containerLine}></span>

            <motion.p
                key={key2}
                initial='initial'
                animate='animate'
                transition={transitionContent}
                variants={variantsContent}
                className={styles.containerSubtitle}
            >
                {subtitle}
            </motion.p>
        </div>
    );
};

SectionTitle.defaultProps = {
    subtitle: null
};

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    lang: PropTypes.bool.isRequired
};

export default SectionTitle;